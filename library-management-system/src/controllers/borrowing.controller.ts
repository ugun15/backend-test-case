import { Request, Response } from 'express';
import { BorrowingService } from '../services/borrowing.service';
import { CreateBorrowingDto, ReturnBookDto } from '../models/borrowing.model';

export class BorrowingController {
  private borrowingService: BorrowingService;

  constructor() {
    this.borrowingService = new BorrowingService();
  }

  async create(req: Request, res: Response) {
    try {
      const data: CreateBorrowingDto = req.body;
      const borrowing = await this.borrowingService.create(data);
      res.status(201).json(borrowing);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error creating borrowing' });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const borrowings = await this.borrowingService.findAll();
      res.json(borrowings);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching borrowings' });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const borrowing = await this.borrowingService.findOne(id);
      if (!borrowing) {
        return res.status(404).json({ message: 'Borrowing record not found' });
      }
      res.json(borrowing);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching borrowing' });
    }
  }

  async returnBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: ReturnBookDto = req.body;
      const borrowing = await this.borrowingService.returnBook(id, data);
      res.json(borrowing);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error returning book' });
    }
  }

  async getActiveBorrowings(req: Request, res: Response) {
    try {
      const { memberId } = req.params;
      const borrowings = await this.borrowingService.getActiveBorrowings(memberId);
      res.json(borrowings);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching active borrowings' });
    }
  }
} 