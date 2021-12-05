import {
  BiBell,
  BiCog,
  BiExitFullscreen,
  BiFullscreen,
  BiPlay,
} from 'react-icons/bi';
import { FlexSpread, Reverse, Space } from '../Common/Common-style';

import { Button } from '../Button/Button';
import { IImageProps } from './Image.types';
import { ImageStyled } from './Image-style';
import { ImageViewStages } from '../../constants/constants';
import React from 'react';
import { Slide } from '../Slide/Slide';
import { Text } from '../Text/Text';
import { theme2021 as theme } from '../../theme';

export const Image = ({
  srcUrl = 'https://picsum.photos/id/441/800',
  showCardUI = false,
  stage,
  animationStepDuration,
  handleSettingsTab,
  handleExpandCard,
  stageBack,
}: IImageProps) => {
  return (
    <ImageStyled data-ref="Image" srcUrl={srcUrl}>
      <FlexSpread height="100%">
        <Slide
          isOpen={showCardUI}
          from="-100%"
          to="0"
          duration={animationStepDuration}
        >
          <>
            <Space height={[10, 20, 20]} />
            <FlexSpread row>
              <div>
                <Text.priceMedium color="white">
                  Catalonia Atenas
                </Text.priceMedium>
                <Text.h3 color="white">Barcelona Spain</Text.h3>
              </div>
              <Button onClick={handleSettingsTab}>
                <BiCog />
              </Button>
            </FlexSpread>
          </>
        </Slide>

        <FlexSpread row>
          <Slide
            isOpen={showCardUI}
            from="100%"
            to="0"
            duration={animationStepDuration}
          >
            <>
              <Reverse>
                <Button onClick={stageBack}>
                  {stage === ImageViewStages.MAXIMIZED ? (
                    <BiExitFullscreen />
                  ) : (
                    <BiPlay />
                  )}
                </Button>
              </Reverse>
              <Space height={[10, 10, 20]} />
            </>
          </Slide>
          <Slide
            isOpen={showCardUI}
            from="100%"
            to="0"
            duration={animationStepDuration}
          >
            {stage === ImageViewStages.OPEN && (
              <Button onClick={handleExpandCard}>
                <BiFullscreen />
              </Button>
            )}
          </Slide>
        </FlexSpread>
      </FlexSpread>
    </ImageStyled>
  );
};

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
