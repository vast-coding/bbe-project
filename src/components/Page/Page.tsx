import {
  BottomContent,
  Container,
  PageStyled,
  SettingsMenu,
  TitleWrap,
} from './Page.style';
import { Col, Row, Space } from '../Common/Common.style.js';
import React, { useEffect, useState } from 'react';

import { BiBell } from 'react-icons/bi';
import { BodyCopy } from '../BodyCopy/BodyCopy';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { Slide } from '../Slide/Slide';
import { Slider } from '../Slider/Slider';
import { Squash } from '../Squash/Squash';
import { Text } from '../Text/Text';
import { TourIncludes } from '../TourIncludes/TourIncludes';
import styled from 'styled-components';
import { theme2021 as theme } from '../../theme';

export const Page = () => {
  const [stage, setStage] = useState(0);
  const [cardImage, setCardImage] = useState(0);
  const [settingsTab, setSettingsTab] = useState(false);
  const [duration, setDuration] = useState(theme.transitions.duration);
  const [activeTab, setActiveTab] = useState(0);
  const toggleSettingsTab = () => setSettingsTab(!settingsTab);
  const maxStage = 2;
  let time = (multiplier = 1) => multiplier * duration + 's';
  useEffect(() => {
    time = (multiplier = 1) => multiplier * duration + 's';
  }, [duration]);
  const handleToggle = (e) => {
    e.stopPropagation();
    // const nextStage = stage >= 1 ? 0 : stage + 1;
    // const nextStage = stage % (maxStage + 1)
    const nextStage = stage === 0 ? 1 : 0;
    setStage(nextStage);
  };

  const handleExpandCard = (e) => {
    e.stopPropagation();

    setStage(stage === 2 ? 1 : 2);
  };
  const stageTrigger = (activeT) => {
    setActiveTab(activeT);
    setStage(1);
  };

  const stageBack = (e) => {
    e.stopPropagation();

    setStage(stage === 0 ? maxStage : stage - 1);
  };
  const settingsTrigger = (activeT) => {
    // setActiveTab('settings');
    // setStage('settings');
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
      <Text.h3 style={{ position: 'fixed' }}>
        STAGE {stage} activeTab {activeTab} settings;{' '}
        {JSON.stringify(settingsTab)}
      </Text.h3>
      <PageStyled data-ref="Page">
        <SettingsMenu isOpen={settingsTab}>
          <Text.h5 as="label">Animation Settings</Text.h5>
          <Space height={[10, 10, 10]} />
          <Slider updateDuration={setDuration} duration={duration} />
        </SettingsMenu>
        <Container>
          <Squash
            isOpen={stage === 0}
            duration={time()}
            from="-100%"
            to="0"
            delay={time()}
          >
            <Slide
              isOpen={stage === 0}
              duration={time()}
              from="-100%"
              to="0"
              delay={time()}
            >
              <TitleWrap>
                <Text.h1>Travel Destinations</Text.h1>

                <ul>
                  {srcUrls.map((url, i) => (
                    <Button
                      srcUrl={url}
                      key={'button' + i}
                      onClick={() => stageTrigger(i)}
                      isActive={activeTab === i}
                      size={100}
                    />
                  ))}
                </ul>
              </TitleWrap>
            </Slide>
          </Squash>
          <Slide
            isOpen={[1, 2].includes(stage)}
            duration={time()}
            from="-100%"
            to="0"
            left={true}
            delay={time()}
          >
            <Image
              isOpen={[1, 2].includes(stage)}
              handleToggle={handleToggle}
              handleExpandCard={handleExpandCard}
              stage={stage}
              srcUrl={srcUrls[activeTab]}
              duration={time()}
              handleSettingsTab={toggleSettingsTab}
              stageBack={stageBack}
            />
          </Slide>
          <BottomContent>
            <Slide
              isOpen={[1].includes(stage)}
              to="0"
              from="100%"
              left
              duration={time()}
              delay={time()}
            >
              <Squash
                handleToggle={handleToggle}
                isOpen={[1].includes(stage)}
                duration={time()}
              >
                <BodyCopy />
              </Squash>
              <Squash
                handleToggle={handleToggle}
                isOpen={[1].includes(stage)}
                duration={time()}
                delay={time(2)}
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
