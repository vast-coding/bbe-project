import { ISlideProps } from './Slide.types';
import React from 'react';
import { SlideStyled } from './Slide-style';

export const Slide = ({
  duration = '.3s',
  delay = '0',
  isOpen,
  from,
  to,
  children,
  left,
}: ISlideProps) => {
  return (
    <SlideStyled
      data-testid="Slide"
      isOpen={isOpen}
      duration={duration}
      delay={delay}
      from={from}
      to={to}
      left={left}
    >
      <div style={{ height: '100%' }}>{children}</div>
    </SlideStyled>
  );
};
