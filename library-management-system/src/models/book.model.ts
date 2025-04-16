export interface Book {
  id: string;
  code: string;
  title: string;
  author: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBookDto {
  code: string;
  title: string;
  author: string;
  stock: number;
}

export interface UpdateBookDto {
  title?: string;
  author?: string;
  stock?: number;
} 