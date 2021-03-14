import React from 'react';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
