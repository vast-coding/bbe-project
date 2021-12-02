import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/theme/GlobalStyle';
import React from 'react';
import { theme2021 } from '../src/theme';

const PageContainer = styled.div`
  max-width: 1200px;
  padding: 0;
  margin: 0 auto;
`;
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme2021}>
      <PageContainer>
        <GlobalStyle />
        <Story />
      </PageContainer>
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
