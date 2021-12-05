import styled from 'styled-components';
// ${(p) => (p.isOpen ? '200px' : '500px')};
export const ImageStyled = styled.div`
  color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0) 15%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${(p) => p.srcUrl});
  /* height: var(--w); */
  /* transition-property: height;
  transition-duration: 1s; */
  /* flex: 1; */
  /* max-width: 325px; */
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0 20px;
  height: 100%;
`;

// max-width: 500px;
