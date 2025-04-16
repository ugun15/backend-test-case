export interface Borrowing {
  id: string;
  memberId: string;
  bookId: string;
  borrowDate: Date;
  returnDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBorrowingDto {
  memberId: string;
  bookId: string;
}

export interface ReturnBookDto {
  returnDate: Date;
} 