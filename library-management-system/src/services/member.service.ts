import { PrismaClient } from '@prisma/client';
import { CreateMemberDto, UpdateMemberDto } from '../models/member.model';

const prisma = new PrismaClient();

export class MemberService {
  async create(data: CreateMemberDto) {
    return prisma.member.create({
      data,
    });
  }

  async findAll() {
    return prisma.member.findMany({
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
    return prisma.member.findUnique({
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

  async update(id: string, data: UpdateMemberDto) {
    return prisma.member.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return prisma.member.delete({
      where: { id },
    });
  }

  async getActiveBorrowingsCount(memberId: string) {
    const borrowings = await prisma.borrowing.count({
      where: {
        memberId,
        returnDate: null,
      },
    });
    return borrowings;
  }
} 