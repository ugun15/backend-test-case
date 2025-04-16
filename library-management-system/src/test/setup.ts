import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Clean up database before tests
  await prisma.borrowing.deleteMany();
  await prisma.member.deleteMany();
  await prisma.book.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
}); 