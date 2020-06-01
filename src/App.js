import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth.context';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
