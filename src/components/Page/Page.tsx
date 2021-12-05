import {
  BottomContent,
  Container,
  PageStyled,
  SettingsMenu,
  TitleWrap,
} from './Page-style';
import { Col, Row, Space } from '../Common/Common-style';
import React, { useCallback, useEffect, useState } from 'react';

import { BiBell } from 'react-icons/bi';
import { BodyCopy } from '../BodyCopy/BodyCopy';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { ImageViewStages } from '../../constants/constants';
import { Slide } from '../Slide/Slide';
import { Slider } from '../Slider/Slider';
import { Squash } from '../Squash/Squash';
import { SquashSlide } from '../SquashSlide/SquashSlide';
import { Text } from '../Text/Text';
import { TourIncludes } from '../TourIncludes/TourIncludes';
import styled from 'styled-components';
import { theme2021 as theme } from '../../theme';

export const Page = () => {
  const [stage, setStage] = useState(0);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const [animationStepDuration, setAnimationStepDuration] = useState(
    theme.transitions.duration
  );
  const animationTime = useCallback(
    (multiplier = 1) => multiplier * animationStepDuration + 's',
    [animationStepDuration]
  );

  const toggleSettingsMenu = () => setShowSettingsMenu(!showSettingsMenu);

  const toggleExpandCard = () => {
    setStage(
      stage === ImageViewStages.MAXIMIZED
        ? ImageViewStages.OPEN
        : ImageViewStages.MAXIMIZED
    );
  };
  const selectItem = (itemIndex: number) => {
    setSelectedItem(itemIndex);
    setStage(1);
  };

  const stageBack = () => {
    setStage(Math.max(0, stage - 1));
  };

  const srcUrls = [
    'https://picsum.photos/id/441/800',
    'https://picsum.photos/id/412/800',
    'https://picsum.photos/id/879/800',
    'https://picsum.photos/id/10/800',
    'https://picsum.photos/id/1004/800',
    'https://picsum.photos/id/1005/800',
    'https://picsum.photos/id/1015/800',
    'https://picsum.photos/id/1016/800',
    'https://picsum.photos/id/1018/800',
    'https://picsum.photos/id/1019/800',
    'https://picsum.photos/id/1020/800',
    'https://picsum.photos/id/1021/800',
    'https://picsum.photos/id/1022/800',
    'https://picsum.photos/id/1023/800',
  ];

  return (
    <>
      <PageStyled data-ref="Page">
        <Squash isOpen={showSettingsMenu}>
          <SettingsMenu>
            <Text.h5 as="label">Animation Settings</Text.h5>
            <Space height={[10, 10, 10]} />
            <Slider
              updateDuration={setAnimationStepDuration}
              duration={animationStepDuration}
            />
          </SettingsMenu>
        </Squash>
        <Container>
          <SquashSlide
            isOpen={stage === ImageViewStages.CLOSED}
            duration={animationTime()}
            from="-100%"
            to="0"
            delay={animationTime()}
          >
            <TitleWrap>
              <Text.h1>Travel Destinations</Text.h1>

              <ul>
                {srcUrls.map((url, i) => (
                  <Button
                    srcUrl={url}
                    key={i}
                    onClick={() => selectItem(i)}
                    isActive={selectedItem === i}
                    size={100}
                  />
                ))}
              </ul>
            </TitleWrap>
          </SquashSlide>

          <Slide
            isOpen={[ImageViewStages.OPEN, ImageViewStages.MAXIMIZED].includes(
              stage
            )}
            duration={animationTime()}
            from="-100%"
            to="0"
            left
            delay={animationTime()}
          >
            <Image
              showCardUI={[
                ImageViewStages.OPEN,
                ImageViewStages.MAXIMIZED,
              ].includes(stage)}
              handleExpandCard={toggleExpandCard}
              stage={stage}
              srcUrl={srcUrls[selectedItem]}
              animationStepDuration={animationTime()}
              handleSettingsTab={toggleSettingsMenu}
              stageBack={stageBack}
            />
          </Slide>
          <BottomContent>
            <Slide
              isOpen={[ImageViewStages.OPEN].includes(stage)}
              to="0"
              from="100%"
              left
              duration={animationTime()}
              delay={animationTime()}
            >
              <Squash
                isOpen={[ImageViewStages.OPEN].includes(stage)}
                duration={animationTime()}
              >
                <BodyCopy />
              </Squash>
              <Squash
                isOpen={[ImageViewStages.OPEN].includes(stage)}
                duration={animationTime()}
                delay={animationTime(2)}
              >
                <TourIncludes />
              </Squash>
            </Slide>
          </BottomContent>
        </Container>
      </PageStyled>
    </>
  );
};
