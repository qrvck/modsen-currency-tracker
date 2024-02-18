interface IUpdateStatus {
  status: 'updated' | 'updating' | 'error';
  timestamp?: number;
}

export type { IUpdateStatus };
