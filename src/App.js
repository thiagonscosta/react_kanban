import React from 'react';
import Board from './components/board';
import Header from './components/header';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
