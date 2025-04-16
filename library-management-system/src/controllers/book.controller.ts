import { Request, Response } from 'express';
import { BookService } from '../services/book.service';
import { CreateBookDto, UpdateBookDto } from '../models/book.model';

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  async create(req: Request, res: Response) {
    try {
      const data: CreateBookDto = req.body;
      const book = await this.bookService.create(data);
      res.status(201).json(book);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error creating book' });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const books = await this.bookService.findAll();
      res.json(books);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching books' });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = await this.bookService.findOne(id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (error: any) {
      res.status(500).json({ message: error?.message || 'Error fetching book' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: UpdateBookDto = req.body;
      const book = await this.bookService.update(id, data);
      res.json(book);
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error updating book' });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.bookService.remove(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error?.message || 'Error deleting book' });
    }
  }
} 