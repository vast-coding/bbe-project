import { Button, Scrim, SquashStyled } from './Squash-style';
import React, { useEffect, useRef, useState } from 'react';

import { ISquashProps } from './Squash.types';
import { Text } from '../Text/Text';

export const Squash = ({
  duration = '.3s',
  isOpen,
  children,
  delay,
}: ISquashProps) => {
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const height = ref?.current?.clientHeight;
    if (height !== undefined) {
      setHeight(height);
    }
  }, [isOpen]);

  return (
    <SquashStyled
      data-testid="Squash"
      isOpen={isOpen}
      containerHeight={height}
      duration={duration}
      delay={delay}
    >
      <div ref={ref}>{children}</div>
    </SquashStyled>
  );
};
