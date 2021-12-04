import React, { useState } from 'react';

import { BiBell } from 'react-icons/bi';
import { BodyCopy } from '../BodyCopy/BodyCopy';
import { Image } from '../Image/Image';
import { PageStyled } from './Page.style';
import { Squash } from '../Squash/Squash';
import { Text } from '../Text/Text';
import { TourIncludes } from '../TourIncludes/TourIncludes';
import styled from 'styled-components';

const ContentSquash = styled(Squash)`
  height: 100%;
`;

export const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [stage, setStage] = useState(0);
  const maxStage = 3;
  const handleToggle = () => {
    const nextStage = stage === maxStage ? 0 : stage + 1;
    setStage(nextStage);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Text.h1 style={{ position: 'fixed' }}>STAGE {stage}</Text.h1>

      <PageStyled data-ref="Page">
        <Squash isOpen={!isOpen}>
          <ul>
            <Text.body as="li">hotels</Text.body>
            <Text.body as="li">events</Text.body>
            <Text.body as="li">sights</Text.body>
            <Text.body as="li">things to do</Text.body>
          </ul>
        </Squash>

        <Image isOpen={!isOpen} handleToggle={handleToggle} height="1200px" />

        <ContentSquash handleToggle={handleToggle} isOpen={isOpen}>
          <BodyCopy />
          <Text.h4>This tour includes</Text.h4>
        </ContentSquash>
        <ContentSquash handleToggle={handleToggle} isOpen={stage === 3}>
          <Text.h4>This tour includes</Text.h4>
          <TourIncludes />
        </ContentSquash>
      </PageStyled>
    </>
  );
};
