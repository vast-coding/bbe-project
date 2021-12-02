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

export const ButtonStyled = styled.div`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  overflow: hidden;
  ${backgroundImage};
  background-color: ${(p) => (p.color ? p.color : 'transparent')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
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
    transform: scale(0.95);
    transition: transform 0.15s ease-in-out;
  }
  &:focus {
    outline: transparent solid 2px;
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgb(77, 144, 254);
  }
`;
