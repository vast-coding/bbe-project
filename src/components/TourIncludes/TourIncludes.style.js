import styled from 'styled-components';

export const TourIncludesStyled = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px;
  & > div {
    grid-area: 1 / 1;
    border: 4px solid white;
  }
  & > div:nth-child(0) {
    margin-left: 5px;
  }
  & > div:nth-child(1) {
    margin-left: 25px;
  }
  & > div:nth-child(2) {
    margin-left: 50px;
  }
  & > div:nth-child(3) {
    margin-left: 75px;
  }
  & > div:nth-child(4) {
    margin-left: 100px;
  }
`;
