import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Pages from '../pages';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  
  * {
    box-sizing: border-box;
  }
  
  body {
   font-family: 'Roboto', sans-serif;
  }
`;

// Get this from the API
const layouts = {
  base: 'layout1',
  engaged: 'layout2'
}

const App = () => (
  <div className={layouts.base}>
    <GlobalStyle />
    <Pages />
  </div>
);

export default App;
