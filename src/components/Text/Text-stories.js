import React from 'react';
import { Text } from './Text';
import styled from 'styled-components';

export const Courier = styled.span`
  font-family: 'Courier New', Courier, monospace;
`;

export const Line = styled.div`
  border: 1px solid black;
  margin-bottom: 0px;
`;

export const Wrap = styled.div`
  width: 200px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  margin-bottom: 60px;
  margin: 2.5rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

export const Card = ({
  children,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  title,
}) => (
  <Wrap>
    {children}
    <div>
      <Text.h6>{title}</Text.h6>

      <Courier as="div">color: {color}</Courier>
      <Courier as="div">size: {fontSize}</Courier>
      <Courier as="div">height: {lineHeight}</Courier>
      <Courier as="div">font weight: {fontWeight}</Courier>
    </div>
  </Wrap>
);
