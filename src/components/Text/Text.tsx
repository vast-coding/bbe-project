/* istanbul ignore file */

import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';
import { theme2021 as theme } from '../../theme';

const { mobile } = mediaQueries;
console.log({ theme });
const baseFontSize = 16;
const px2rem = (px: number) => `${px / baseFontSize}rem`;
interface TextProps {
  readonly color?: string;
}

const headingStyles = css<TextProps>`
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.primary};
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0;
`;

const priceStyles = css<TextProps>`
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.primary};
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  margin: 0;
`;

const subHeadingStyles = css<TextProps>`
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.primary};
  font-family: 'Raleway', sans-serif;

  font-style: normal;
  font-weight: bold;
  margin: 0;
`;

const styleH0 = css`
  font-size: ${px2rem(46)};
  line-height: ${px2rem(46)};
`;

const styleH1 = css`
  font-size: ${px2rem(36)};
  line-height: ${px2rem(47)};
`;

const styleH2 = css`
  font-size: ${px2rem(26)};
  line-height: ${px2rem(34)};
`;

const styleH3 = css`
  font-size: ${px2rem(20)};
  line-height: ${px2rem(26)};
`;

const styleH4 = css`
  font-size: ${px2rem(18)};
  line-height: ${px2rem(23)};
`;

const styleH5 = css`
  font-size: ${px2rem(16)};
  line-height: ${px2rem(21)};
`;

const styleH6 = css`
  font-size: ${px2rem(14)};
  line-height: ${px2rem(21)};
`;

export const priceLarge = styled.span`
  ${styleH0}
  ${priceStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH1}
  }
`;
export const priceMedium = styled.span`
  ${styleH2}
  ${priceStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH3}
  }
`;
export const priceSmall = styled.span`
  ${styleH3}
  ${priceStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH4}
  }
`;

export const h1 = styled.h1`
  ${styleH1}
  ${headingStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH2}
  }
`;

export const h2 = styled.h2`
  ${styleH2}
  ${headingStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH3}
  }
`;

export const h3 = styled.h3`
  ${headingStyles}
  ${styleH3}
  @media ${mobile} {
    ${(props) => !props.static && styleH4}
  }
`;

export const h4 = styled.h4`
  ${styleH4}
  ${subHeadingStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH5}
  }
`;

export const h5 = styled.h5`
  ${styleH5}
  ${subHeadingStyles}
  @media ${mobile} {
    ${(props) => !props.static && styleH6}
  }
`;

export const h6 = styled.h5`
  ${styleH6}
  ${subHeadingStyles}
`;

export const body = styled.span<TextProps>`
  font-size: ${px2rem(14)};
  line-height: ${px2rem(21)};
  font-family: ${(props) => theme.font};
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.shark};
`;

const bodyLarge = styled(body)`
  font-size: ${px2rem(16)};
  line-height: ${px2rem(21)};
`;

export const leaders = styled.span`
  color: ${(props) => theme.colors.dustyGray};
  font-size: 16px;
  line-height: 21px;
  font-weight: normal;
  font-style: normal;
  font-family: 'Raleway', sans-serif;
`;

export const Text = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  priceMedium,
  priceSmall,
  priceLarge,
  bodyLarge,
  leaders,
} as const;
