import { BiBell } from 'react-icons/bi';
import { ButtonStyled } from './Button.style';
import { IButtonProps } from './Button.types';
import React from 'react';
import { Text } from '../Text/Text';

export const Button = ({ srcUrl = '', color = '', children }: IButtonProps) => (
  <ButtonStyled data-ref="Button" srcUrl={srcUrl} color={color}>
    {children}
  </ButtonStyled>
);
