import { Col } from '../Common/Common-style';
import { mediaQueries } from '../../theme';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  max-width: 500px;
  margin: auto;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  padding-top: 10px;
  padding-bottom: 10px;
  ul {
    display: flex;
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media ${mediaQueries.mobile} {
      overflow-x: scroll;
    }
  }
`;

export const PageStyled = styled.div`
  padding: 0px 10px;
  border: 1px solid grey;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export const BottomContent = styled.div`
  max-height: 1000px;
  transition: max-height 10s ease-in-out;
`;

export const SettingsMenu = styled(Col)`
  max-width: 500px;
  margin: auto;
  padding: 10px 0;
`;
