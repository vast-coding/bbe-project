import styled from 'styled-components';

export const PageStyled = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 20px 10px;
  gap: 20px;
  max-width: 500px;
  margin: auto;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: min-content 1fr min-content;
`;
