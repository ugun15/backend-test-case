import { MemberService } from '../member.service';
import { PrismaClient } from '@prisma/client';
import '@jest/globals';

const prisma = new PrismaClient();
const memberService = new MemberService();

describe('MemberService', () => {
  const testMember = {
    code: 'TEST001',
    name: 'Test Member',
  };

  beforeEach(async () => {
    await prisma.member.deleteMany();
  });

  describe('create', () => {
    it('should create a new member', async () => {
      const member = await memberService.create(testMember);
      expect(member).toHaveProperty('id');
      expect(member.code).toBe(testMember.code);
      expect(member.name).toBe(testMember.name);
    });

    it('should throw error if member code already exists', async () => {
      await memberService.create(testMember);
      await expect(memberService.create(testMember)).rejects.toThrow();
    });
  });

  describe('findAll', () => {
    it('should return all members', async () => {
      await memberService.create(testMember);
      const members = await memberService.findAll();
      expect(members).toHaveLength(1);
      expect(members[0].code).toBe(testMember.code);
    });
  });

  describe('findOne', () => {
    it('should return a member by id', async () => {
      const created = await memberService.create(testMember);
      const member = await memberService.findOne(created.id);
      expect(member).toBeDefined();
      expect(member?.code).toBe(testMember.code);
    });

    it('should return null if member not found', async () => {
      const member = await memberService.findOne('non-existent-id');
      expect(member).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a member', async () => {
      const created = await memberService.create(testMember);
      const updated = await memberService.update(created.id, { name: 'Updated Name' });
      expect(updated.name).toBe('Updated Name');
    });

    it('should throw error if member not found', async () => {
      await expect(
        memberService.update('non-existent-id', { name: 'Updated Name' })
      ).rejects.toThrow();
    });
  });

  describe('remove', () => {
    it('should delete a member', async () => {
      const created = await memberService.create(testMember);
      await memberService.remove(created.id);
      const member = await memberService.findOne(created.id);
      expect(member).toBeNull();
    });

    it('should throw error if member not found', async () => {
      await expect(memberService.remove('non-existent-id')).rejects.toThrow();
    });
  });

  describe('getActiveBorrowingsCount', () => {
    it('should return correct count of active borrowings', async () => {
      const member = await memberService.create(testMember);
      const count = await memberService.getActiveBorrowingsCount(member.id);
      expect(count).toBe(0);
    });
  });
}); 