import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';

export const SquashStyled = styled.div`
  height: ${(p) => (p.isOpen ? p.containerHeight + 'px' : '0')};
  overflow: hidden;
  transition: height ${(p) => p?.duration || '.3s'} ease-in-out;
`;

export const Button = styled.button`
  color: ${(p) => p.theme.colors.primary};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(p) => p.theme.colors.primary};
  border-radius: 3px;
  background: white;
  border: 1px solid grey;
  &:hover {
    color: black;
    border-color: black;
    background: ${(p) => p.theme.colors.primary};

    color: white;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.15s ease-in-out;
  }
  &:focus {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgb(77, 144, 254);
  }
`;

// @media ${mediaQueries.desktop} {
//   transition: height 0.01s ease-in-out;
//   height: unset;
// }

export const Scrim = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  transition: opacity 0.2s ease-in-out, max-height 0.01s ease-in-out;
  max-height: 0;
  opacity: 0;
  @media ${mediaQueries.mobileAndTablet} {
    ${(p) =>
      p.isOpen &&
      css`
        opacity: 1;
        max-height: 100%;
      `};
  }
`;
