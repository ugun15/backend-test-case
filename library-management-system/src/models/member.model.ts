export interface Member {
  id: string;
  code: string;
  name: string;
  penalty: boolean;
  penaltyEndDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMemberDto {
  code: string;
  name: string;
}

export interface UpdateMemberDto {
  name?: string;
  penalty?: boolean;
  penaltyEndDate?: Date;
} 