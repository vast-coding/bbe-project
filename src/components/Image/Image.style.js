import styled from 'styled-components';
// ${(p) => (p.isOpen ? '200px' : '500px')};
export const ImageStyled = styled.div`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${(p) => p.srcUrl});
  min-height: var(--w);
  transition-property: min-height;
  transition-duration: 1s;

  /* max-width: 325px; */
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 20px;
  flex-grow: 1;
`;

// max-width: 500px;

export const FlexSpread = styled.div`
  display: flex;
  justify-content: space-between;
`;
