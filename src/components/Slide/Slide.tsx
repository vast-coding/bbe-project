import { ISlideProps } from './Slide.types';
import React from 'react';
import { SlideStyled } from './Slide-style';

export const Slide = ({
  children,
  delay = '0',
  duration = '.3s',
  ease,
  from,
  isOpen,
  left,
  to,
}: ISlideProps) => {
  return (
    <SlideStyled
      data-testid="Slide"
      isOpen={isOpen}
      duration={duration}
      delay={delay}
      ease={ease}
      from={from}
      to={to}
      left={left}
    >
      <div style={{ height: '100%' }}>{children}</div>
    </SlideStyled>
  );
};
