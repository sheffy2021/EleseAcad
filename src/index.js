import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './theme/GlobalStyles'
import myTheme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

