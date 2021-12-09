import styled from 'styled-components';

export const ImageStyled = styled.div<{ srcUrl: string }>`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0% 10%,
      rgba(0, 0, 0, 0) 25% 75%,
      rgba(0, 0, 0, 0.6) 90% 100%
    ),
    url(${(p) => p.srcUrl});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0 20px;
  height: 100%;
`;
