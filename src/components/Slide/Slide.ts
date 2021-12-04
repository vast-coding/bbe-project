import { ReactNode } from 'react';

export type ISlideProps = {
  duration?: string | null;
  isOpen: boolean;
  containerHeight: number;
  children: ReactNode;
  handleToggle: () => null;
  trigger: ReactNode;
  className?: string;
};
