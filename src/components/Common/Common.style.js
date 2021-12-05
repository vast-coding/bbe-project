import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';

const { mobile, desktop, tablet } = mediaQueries;

const getResponsiveSize = (p) => {
  const dim = p.height ? 'height' : 'width';
  return css`
    @media ${mobile} {
      ${dim}: ${p[dim][0]}px;
    }
    @media ${tablet} {
      ${dim}: ${p[dim][1]}px;
    }
    @media ${desktop} {
      ${dim}: ${p[dim][2]}px;
    }
  `;
};

export const Space = styled.span`
  display: ${(p) => (p.width ? 'inline-block' : 'block')};
  ${getResponsiveSize}

  ${(props) =>
    props.height < 0 &&
    css`
      margin-top: ${(p) => p.height}px;
    `};
  ${(p) => p.mobileHidden && hide(mobile)}
  ${(p) => p.desktopHidden && hide(desktop)}
  ${(p) => p.tabletHidden && hide(tablet)}
`;

export const FlexSpread = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.row ? 'row' : 'column')};
  justify-content: space-between;
  ${(p) =>
    p.height &&
    css`
      height: 100%;
    `}
`;

export const Reverse = styled.div`
  transform: rotate(180deg);
`;

const spaceBetween = css`
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  ${(p) => p.spread && spaceBetween}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${(p) => p.spread && spaceBetween}
`;
