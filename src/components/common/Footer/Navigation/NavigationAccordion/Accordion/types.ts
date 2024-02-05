import { ReactNode } from 'react';

export interface IAccordion {
  title: ReactNode;
  dropDownContent: ReactNode;
  animationDuration?: number;
}
