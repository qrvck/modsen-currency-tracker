import { ReactNode } from 'react';

export interface IModal {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}
