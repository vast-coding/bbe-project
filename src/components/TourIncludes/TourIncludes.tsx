import { BiBell, BiBellMinus } from 'react-icons/bi';

import { Button } from '../Button/Button';
import { ButtonWrapper } from './TourIncludes.style';
import { ITourIncludesProps } from './TourIncludes.types';
import React from 'react';
import { Text } from '../Text/Text';
import { TourIncludesStyled } from './TourIncludes.style';

export const TourIncludes = ({
  srcUrl = '',
  color = '',
}: ITourIncludesProps) => (
  <TourIncludesStyled data-ref="TourIncludes">
    <ButtonWrapper>
      <Button srcUrl="https://picsum.photos/id/441/800">
        <BiBellMinus />
      </Button>
      <Button srcUrl="https://picsum.photos/id/441/800">
        <BiBellMinus />
      </Button>
      <Button color="orange">
        <BiBellMinus />
      </Button>
    </ButtonWrapper>
  </TourIncludesStyled>
);
// export const London = Template.bind({});
// London.args = {
//   srcUrl: 'https://picsum.photos/id/441/800',
// };

// export const Red = Template.bind({});
// Red.args = {
//   color: 'green',
//   children: <BiBell />,
// };
