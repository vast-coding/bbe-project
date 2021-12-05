import styled from 'styled-components';

export const TourIncludesStyled = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px;
  & > div {
    grid-area: 1 / 1;
    border: 3px solid white;
  }

  & > div:nth-child(1) {
    margin-left: 0px;
  }
  & > div:nth-child(2) {
    margin-left: 40px;
  }
  & > div:nth-child(3) {
    margin-left: 80px;
  }
`;
