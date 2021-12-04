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
}: ISquashProps) => {
  const [height, setHeight] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [isOpen]);
  return (
    <div style={{ height: '100%' }}>
      <SquashStyled
        data-testid="Squash"
        isOpen={isOpen}
        containerHeight={height}
        duration={duration}
      >
        <div ref={ref}>{children}</div>
      </SquashStyled>
    </div>
  );
};
