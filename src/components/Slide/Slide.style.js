import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';

export const SlideStyled = styled.div`
  transform: translate(
    0,
    ${(p) => (p.isOpen ? p.containerHeight + '100%' : '0')}
  );
  overflow: hidden;
  transition: transform ${(p) => p?.duration || '.3s'} ease-in-out;
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
