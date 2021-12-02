import styled, { css } from 'styled-components';

import { ITheme } from '../theme/theme.types';
import { ReactNode } from 'react';

const colors = {
  primary: '#005bab',
  secondary: '#ffffff',
  japaneceLaurel: '#108600',
  supernova: '#ffcb05',
  triaMaria: '#c35310',
  crimson: '#d7122d',
  twilightBlue: '#f1fbff',
  cornflowerBlue: '#019cdc',
  white: '#ffffff',
  alabaster: '#f8f8f8',
  gallery: '#efefef',
  bonJour: '#e0e0e0',
  anakiwa: '#a5e5ff',
  silver: '#cccccc',
  silverLight: '#c1c1c1',
  silverDark: '#a0a0a0',
  dustyGray: '#999999',
  emperor: '#555555',
  shark: '#252525',
  black: '#000000',
  richGold: '#a75905',
  zumthor: '#ebf5ff',
  hintOfGreen: '#edffeb',
  halfAndHalf: '#feffde',
  wispPink: '#fdecee',
  disabledBackground: '#dddddd',
  disabledBorder: '#bbbbbb',
  primaryDark: '#004078',
  primaryDark2: '#003a6e',
  light: '#f8f8f8',
  addToCartHover: '#13a000',
  blueChill: '#098783',
  concrete: '#f2f2f2',
  ecoGreen: '#00693d',
  maroon: '#a94442',
  lightMaroon: '#eed5d4',
  goldenBrown: '#A75905',
  purple: '#800080',
};

const radius = 3;

const radii = {
  standard: '10px',
  panel: '26px',
};

const zIndex = {
  hidden: -1,
  default: 0,
  elevated: 1,
  searchDropdown: 22,
  dropdown: 5,
  header: 21,
  overlays: 100,
  modals: 1000,
  floatingMenu: 1100,
};

const transitions = {
  easing: 'ease',
  duration: 350,
};

export const theme = {
  colors,
  radius,
  radii,
  zIndex,
  transitions,
};
export default theme;

// 2021 re-brand colors
const rebrandPrimary = '#515151';
const overideColors = {
  primary: rebrandPrimary,
  endeavour: rebrandPrimary,
  active: rebrandPrimary,
  forest: '#00682d',
  primaryRed: '#DA192E',
};
const rebrandColors = { ...colors, ...overideColors };

export const theme2021 = {
  ...theme,
  colors: rebrandColors,
  fonts: { ...{ demi: 'Demi' } },
};

// responsive style short-hands

const desktop = () => '(min-width: 990px)';
const mobile = () => '(max-width: 639px)';
const tablet = () => '(min-width: 640px) and (max-width: 989px)';
const mobileAndTablet = () => `(max-width: 989px)`;

export const mediaQueries = {
  desktop,
  mobile,
  tablet,
  mobileAndTablet,
  tablet,
};

type IWithDisabledStyleProps = { disabled: boolean; theme: ITheme };

export const withDisabledStyle = (Component: ReactNode) =>
  styled(Component)`
    ${({ disabled, theme }: IWithDisabledStyleProps) =>
      !disabled
        ? ''
        : css`
            color: ${theme.colors.bonJour};
          `}
  `;
