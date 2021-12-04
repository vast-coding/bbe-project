import { Button, Scrim, SlideStyled } from './Slide.style';
import React, { useEffect, useRef, useState } from 'react';

import { ISlideProps } from './Slide.types';
import { Text } from '../Text/Text';

export const Slide = ({
  duration = '.3s',
  isOpen,
  // containerHeight,
  className,
  handleToggle,
  children,
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
    >
      <div ref={ref}>{children}</div>
    </SlideStyled>
  );
};
