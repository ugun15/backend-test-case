import { Request, Response } from 'express';
import { MemberService } from '../services/member.service';
import { CreateMemberDto, UpdateMemberDto } from '../models/member.model';

export class MemberController {
  private memberService: MemberService;

  constructor() {
    this.memberService = new MemberService();
  }

  async create(req: Request, res: Response) {
    try {
      const data: CreateMemberDto = req.body;
      const member = await this.memberService.create(data);
      res.status(201).json(member);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error creating member' });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const members = await this.memberService.findAll();
      res.json(members);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching members' });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const member = await this.memberService.findOne(id);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      res.json(member);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching member' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: UpdateMemberDto = req.body;
      const member = await this.memberService.update(id, data);
      res.json(member);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error updating member' });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.memberService.remove(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error deleting member' });
    }
  }
} 