import React, { useState } from 'react';

import { BiBell } from 'react-icons/bi';
import { BodyCopy } from '../BodyCopy/BodyCopy';
import { Image } from '../Image/Image';
import { PageStyled } from './Page.style';
import { Squash } from '../Squash/Squash';
import { Text } from '../Text/Text';

export const Page = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <PageStyled data-ref="Page">
      <div onClick={handleToggle} isOpen={!isOpen}>
        <Text.priceMedium>Catalonia Atenas</Text.priceMedium>
        <Text.h3>Barcelona Spain</Text.h3>
      </div>
      <Image isOpen={{ isOpen }} onClick={handleToggle} />
      <Squash handleToggle={handleToggle} isOpen={isOpen}>
        <BodyCopy />

        <Squash isOpen={isOpen}>
          <BodyCopy />
        </Squash>
      </Squash>
    </PageStyled>
  );
};
