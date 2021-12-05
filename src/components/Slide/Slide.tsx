import { Button, Scrim, SlideStyled } from './Slide.style';
import React, { useEffect, useRef, useState } from 'react';

import { ISlideProps } from './Slide.types';
import { Text } from '../Text/Text';

export const Slide = ({
  duration = '.3s',
  delay = '0',
  isOpen,
  from,
  to,
  // containerHeight,
  className,
  handleToggle,
  children,
  left,
}: ISlideProps) => {
  const [height, setHeight] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [isOpen]);
  return (
    <SlideStyled
      data-testid="Slide"
      isOpen={isOpen}
      containerHeight={height}
      duration={duration}
      delay={delay}
      from={from}
      to={to}
      left={left}
    >
      <div style={{ height: '100%' }} ref={ref}>
        {children}
      </div>
    </SlideStyled>
  );
};
