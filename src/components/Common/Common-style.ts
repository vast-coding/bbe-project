import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';

const { mobile, desktop, tablet } = mediaQueries;

interface ResponsiveDimensions {
  height?: number[];
  width?: number[];
}
const getResponsiveSize = (p: ResponsiveDimensions) => {
  const dim: keyof typeof p = p.height ? 'height' : 'width';
  return css`
    @media ${mobile} {
      ${dim}: ${p[dim]?.[0]}px;
    }
    @media ${tablet} {
      ${dim}: ${p[dim]?.[1]}px;
    }
    @media ${desktop} {
      ${dim}: ${p[dim]?.[2]}px;
    }
  `;
};

export const Space = styled.span<
  {
    mobileHidden?: boolean;
    desktopHidden?: boolean;
    tabletHidden?: boolean;
  } & ResponsiveDimensions
>`
  display: ${(p) => (p.width ? 'inline-block' : 'block')};
  ${getResponsiveSize}
`;

export const FlexSpread = styled.div<{ row?: boolean; height?: string }>`
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

export const Row = styled.div<{ spread?: boolean }>`
  display: flex;
  ${(p) => p.spread && spaceBetween}
`;

export const Col = styled.div<{ spread?: boolean }>`
  display: flex;
  flex-direction: column;
  ${(p) => p.spread && spaceBetween}
`;
