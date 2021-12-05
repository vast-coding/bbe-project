import { BiBell } from 'react-icons/bi';
import { BodyCopyStyled } from './BodyCopy.style';
import { FlexSpread } from '../Common/Common-style';
import { IBodyCopyProps } from './BodyCopy.types';
import React from 'react';
import { Text } from '../Text/Text';

export const BodyCopy = (props: IBodyCopyProps) => (
  <BodyCopyStyled data-ref="BodyCopy">
    <FlexSpread row>
      <div>
        <Text.h2>Catalonia Atenas</Text.h2>
        <Text.h3>Barcelona Spain</Text.h3>
      </div>
      <Text.priceMedium>$7,223.45</Text.priceMedium>
    </FlexSpread>

    <Text.body>
      Spain is the preferred holiday destination of millions of tourists and
      visitors each year.
    </Text.body>
  </BodyCopyStyled>
);
