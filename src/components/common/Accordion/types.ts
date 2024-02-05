import { ReactNode } from 'react';

export interface IAccordion {
  title: string;
  animationDuration?: number;
  children: ReactNode;
}
