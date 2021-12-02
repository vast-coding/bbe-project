import theme, { mediaQueries } from './index';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

h1, h2, h3, h4, h5 {
  color: ${(props) => props.theme.colors.primary};
  font-family: Raleway;
  line-height: 1.25;
}

h1, h2, h3, h4, h5 {
  margin:0;
}

html {
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}

body {
  font-family: Arial,sans-serif;
  line-height: 1.42857;
  color: #252525;
  padding:0;
  margin:0;
  * { box-sizing: border-box; }
  height:100%;
  min-height: 100%;
  max-width: 100vw;
}

.noscroll {
  overflow: hidden !important;
  height: auto; // Set overflow: hidden will reset scroll pos to top when height: 100%, so set height: auto to prevent scrolling to top
  @media ${mediaQueries.mobileAndTablet} {
    position: fixed; // Prevent bouncing on Safari on tablets and mobile
  }
}

ul ,li{
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
}
`;
