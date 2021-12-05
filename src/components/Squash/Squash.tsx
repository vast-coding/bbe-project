import { Button, Scrim, SquashStyled } from './Squash.style';
import React, { useEffect, useRef, useState } from 'react';

import { ISquashProps } from './Squash.types';
import { Text } from '../Text/Text';

export const Squash = ({
  duration = '.3s',
  isOpen,
  // containerHeight,
  className,
  handleToggle,
  children,
  delay,
}: ISquashProps) => {
  const [height, setHeight] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [isOpen]);
  const cssHeight = isOpen ? '100%' : '0';
  return (
    // <div>  style={{ height: cssHeight }}>
    <div>
      <SquashStyled
        data-testid="Squash"
        isOpen={isOpen}
        containerHeight={height}
        duration={duration}
        delay={delay}
      >
        <div ref={ref}>{children}</div>
      </SquashStyled>
    </div>
  );
};
