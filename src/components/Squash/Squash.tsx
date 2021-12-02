import { Button, Scrim, SquashStyled } from './Squash.style';
import React, { useEffect, useRef, useState } from 'react';

import { ISquashProps } from './Squash.types';
import { Text } from '../Text/Text';

export const Squash = ({
  duration = '.3s',
  isOpen,
  // containerHeight,
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
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        {/* <button
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '40px',
            width: '100%',
            background: 'white',
            border: `none`,
          }}
          onClick={handleToggle}
        >
          {isOpen ? 'close' : 'open'} <Text.priceSmall>$123.45</Text.priceSmall>
        </button> */}
        <SquashStyled
          data-testid="Squash"
          isOpen={isOpen}
          containerHeight={height}
          duration={duration}
        >
          <div ref={ref}>{children}</div>
        </SquashStyled>
      </div>
    </>
  );
};
