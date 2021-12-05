import { ReactNode } from 'react';

export type ISlideProps = {
  duration?: string;
  isOpen: boolean;
  children: ReactNode;
  delay?: string;
  to: string;
  from: string;
  left?: boolean;
};
