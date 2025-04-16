import { PrismaClient } from '@prisma/client';
import { CreateBookDto, UpdateBookDto } from '../models/book.model';

const prisma = new PrismaClient();

export class BookService {
  async create(data: CreateBookDto) {
    return prisma.book.create({
      data,
    });
  }

  async findAll() {
    return prisma.book.findMany({
      include: {
        borrowings: {
          where: {
            returnDate: null,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return prisma.book.findUnique({
      where: { id },
      include: {
        borrowings: {
          where: {
            returnDate: null,
          },
        },
      },
    });
  }

  async update(id: string, data: UpdateBookDto) {
    return prisma.book.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return prisma.book.delete({
      where: { id },
    });
  }

  async getAvailableStock(bookId: string) {
    const book = await prisma.book.findUnique({
      where: { id: bookId },
      include: {
        borrowings: {
          where: {
            returnDate: null,
          },
        },
      },
    });

    if (!book) {
      throw new Error('Book not found');
    }

    const borrowedCount = book.borrowings.length;
    return book.stock - borrowedCount;
  }
} 