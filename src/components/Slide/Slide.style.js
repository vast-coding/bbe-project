import styled, { css } from 'styled-components';

import { mediaQueries } from '../../theme';

const animation = (p) => {
  const strTransition = p.isOpen ? p.to : p.from;

  const x = p.left ? strTransition : '0';
  const y = p.left ? '0' : strTransition;

  return css`
    transform: translate(${x}, ${y});
  `;
};

export const SlideStyled = styled.div`
  ${animation}
  overflow: hidden;
  transition: transform ${(p) => p?.duration || '.3s'} ease-in-out;
  transition-delay: ${(p) => p.delay};
  height: 100%;
`;
