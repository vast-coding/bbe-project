import { ReactNode } from 'react';

export type ISquashProps = {
  duration?: string | null;
  isOpen: boolean;
  containerHeight: number;
  children: ReactNode;
  handleToggle: () => null;
  trigger: ReactNode;
  className?: string;
  delay?: string;
  to: string;
  from: string;
};
