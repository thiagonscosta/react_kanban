import React from 'react';
import Board from './components/board';
import Header from './components/header';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board />
    </>
  );
}

export default App;
