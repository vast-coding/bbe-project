import styled, { css } from 'styled-components';

const backgroundImage = (p) =>
  p.srcUrl &&
  css`
    background-image: url(${(p) => p.srcUrl});
  `;

const backgroundColor = (p) =>
  p.color &&
  css`
    background-color: url(${(p) => p.color});
  `;

const getSize = (p) => {
  if (p.size) {
    return css`
      border-radius: ${p.size / 2}px;
      height: ${p.size}px;
      width: ${p.size}px;
    `;
  }
};
export const ButtonStyled = styled.div`
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

  ${(p) =>
    p.isActive &&
    css`
      transform: scale(0.9);
      transition: transform 0.3s ease-in-out;
      border: 1px solid black;
    `}
`;
