interface IUpdateStatus {
  status: 'updated' | 'updating' | 'error';
  time: string;
}

export type { IUpdateStatus };
