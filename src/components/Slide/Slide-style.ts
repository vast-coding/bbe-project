import styled, { css } from 'styled-components';

const animation = (p: SlideStyledProps) => {
  const strTransition = p.isOpen ? p.to : p.from;

  const x = p.left ? strTransition : '0';
  const y = p.left ? '0' : strTransition;

  return css`
    transform: translate(${x}, ${y});
  `;
};

interface SlideStyledProps {
  duration?: string;
  delay?: string;
  left?: boolean;
  to: string;
  from: string;
  isOpen?: boolean;
}
export const SlideStyled = styled.div<SlideStyledProps>`
  ${animation}
  overflow: hidden;
  transition: transform ${(p) => p?.duration || '.3s'} ease-in-out;
  transition-delay: ${(p) => p.delay};
  height: 100%;
`;
