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
  ease?: string;
  left?: boolean;
  to: string;
  from: string;
  isOpen?: boolean;
}
export const SlideStyled = styled.div<SlideStyledProps>`
  ${animation}
  overflow: hidden;
  transition: transform ${(p) => p?.duration || '.3s'}
    ${(p) => (p?.ease ? p.ease : p?.isOpen ? 'ease-out' : 'ease-in')};
  transition-delay: ${(p) => p?.delay || 0};
  height: 100%;
`;
