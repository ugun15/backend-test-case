import { PrismaClient } from '@prisma/client';
import { CreateBorrowingDto, ReturnBookDto } from '../models/borrowing.model';
import { MemberService } from './member.service';
import { BookService } from './book.service';

const prisma = new PrismaClient();

export class BorrowingService {
  private memberService: MemberService;
  private bookService: BookService;

  constructor() {
    this.memberService = new MemberService();
    this.bookService = new BookService();
  }

  async create(data: CreateBorrowingDto) {
    const member = await this.memberService.findOne(data.memberId);
    if (!member) {
      throw new Error('Member not found');
    }

    if (member.penalty) {
      throw new Error('Member is currently penalized');
    }

    const activeBorrowings = await this.memberService.getActiveBorrowingsCount(data.memberId);
    if (activeBorrowings >= 2) {
      throw new Error('Member cannot borrow more than 2 books');
    }

    const availableStock = await this.bookService.getAvailableStock(data.bookId);
    if (availableStock <= 0) {
      throw new Error('Book is not available');
    }

    return prisma.borrowing.create({
      data,
      include: {
        member: true,
        book: true,
      },
    });
  }

  async findAll() {
    return prisma.borrowing.findMany({
      include: {
        member: true,
        book: true,
      },
    });
  }

  async findOne(id: string) {
    return prisma.borrowing.findUnique({
      where: { id },
      include: {
        member: true,
        book: true,
      },
    });
  }

  async returnBook(id: string, data: ReturnBookDto) {
    const borrowing = await this.findOne(id);
    if (!borrowing) {
      throw new Error('Borrowing record not found');
    }

    if (borrowing.returnDate) {
      throw new Error('Book has already been returned');
    }

    const borrowDate = new Date(borrowing.borrowDate);
    const returnDate = new Date(data.returnDate);
    const daysDiff = Math.floor((returnDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff > 7) {
      const penaltyEndDate = new Date(returnDate);
      penaltyEndDate.setDate(penaltyEndDate.getDate() + 3);

      await this.memberService.update(borrowing.memberId, {
        penalty: true,
        penaltyEndDate,
      });
    }

    return prisma.borrowing.update({
      where: { id },
      data: {
        returnDate: data.returnDate,
      },
      include: {
        member: true,
        book: true,
      },
    });
  }

  async getActiveBorrowings(memberId: string) {
    return prisma.borrowing.findMany({
      where: {
        memberId,
        returnDate: null,
      },
      include: {
        book: true,
      },
    });
  }
} 