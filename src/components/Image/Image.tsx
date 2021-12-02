import { FlexSpread, ImageStyled } from './Image.style';

import { BiBell } from 'react-icons/bi';
import { Button } from '../Button/Button';
import { IImageProps } from './Image.types';
import React from 'react';
import { Text } from '../Text/Text';

export const Image = ({
  srcUrl = 'https://picsum.photos/id/441/800',
  isOpen = false,
}: IImageProps) => (
  <ImageStyled data-ref="Image" srcUrl={srcUrl} isOpen={{ isOpen }}>
    <FlexSpread>
      <div>
        <Text.priceMedium color="white">Catalonia Atenas</Text.priceMedium>
        <Text.h3 color="white">Barcelona Spain</Text.h3>
      </div>
      <Button>
        <BiBell />
      </Button>
    </FlexSpread>
  </ImageStyled>
);

// london
// <img src="https://picsum.photos/id/441/800" />

// forest
// <img src="https://picsum.photos/id/412/800" />

// forest bridge
// <img src="https://picsum.photos/id/879/800" />

//fields
// <img src="https://picsum.photos/id/33/800" />

// beach
// <img src="https://picsum.photos/id/179/800" />

// field
// <img src="https://picsum.photos/id/67/800" />

// Vienna
// <img src="https://picsum.photos/id/826/800" />

// Clouds
// <img src="https://picsum.photos/id/741/800" />

// City
// <img src="https://picsum.photos/id/737/800" />
