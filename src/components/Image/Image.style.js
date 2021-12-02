import styled from 'styled-components';

export const ImageStyled = styled.div`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${(p) => p.srcUrl});

  min-height: ${(p) => (p.isOpen ? '500px' : '500px')};
  /* max-width: 325px; */
  max-width: 500px;
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 20px;
  flex-grow: 1;
`;

export const FlexSpread = styled.div`
  display: flex;
  justify-content: space-between;
`;
