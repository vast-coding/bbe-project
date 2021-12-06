import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  srcUrl?: string;
  color?: string;
  isActive?: boolean;
  size?: number;
}
const backgroundImage = (p: ButtonStyledProps) =>
  p.srcUrl &&
  css<ButtonStyledProps>`
    background-image: url(${(p) => p.srcUrl});
  `;

const backgroundColor = (p: ButtonStyledProps) =>
  p.color &&
  css<ButtonStyledProps>`
    background-color: url(${(p) => p.color});
  `;

const getSize = (p: ButtonStyledProps) => {
  if (p.size) {
    return css`
      border-radius: ${p.size / 2}px;
      height: ${p.size}px;
      width: ${p.size}px;
    `;
  }
};
export const ButtonStyled = styled.div<ButtonStyledProps>`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  height: 60px;
  width: 60px;
  ${getSize}
  overflow: hidden;
  ${backgroundImage};
  background-color: ${(p) => (p.color ? p.color : 'transparent')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  -webkit-filter: brightness(100%);

  &:hover {
    color: black;
    border-color: black;
    -webkit-filter: brightness(80%);
    color: white;
  }
  &:active {
    transform: scale(0.9);
    transition: transform 0.25s ease-in-out;
  }

  &:focus {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgb(77, 144, 254);
  }

  transition: transform 0.3s ease-in-out;

  ${(p) =>
    p.isActive &&
    css`
      transform: scale(0.7);
      border: 1px solid black;
      box-shadow: 0 0 0 2px white, 0 0 0 4px grey;
    `}
`;
