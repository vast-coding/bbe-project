import { ReactNode } from 'react';

export type ISquashProps = {
  duration?: string;
  isOpen: boolean;
  children: ReactNode;
  delay?: string;
};
