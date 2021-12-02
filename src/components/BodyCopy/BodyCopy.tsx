import { BiBell } from 'react-icons/bi';
import { BodyCopyStyled } from './BodyCopy.style';
import { IBodyCopyProps } from './BodyCopy.types';
import React from 'react';
import { Text } from '../Text/Text';

export const BodyCopy = ({ srcUrl = '', color = '' }: IBodyCopyProps) => (
  <BodyCopyStyled data-ref="BodyCopy">
    <Text.body>
      Spain is the preferred holiday destination of millions of tourists and
      visitors each year.
    </Text.body>
    <Text.h5>This tour includes all meals.</Text.h5>
  </BodyCopyStyled>
);
