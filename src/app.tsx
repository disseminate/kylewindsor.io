import * as React from 'react';
import Home from './pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Resume from './pages/resume';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';
import { GlobalStyle } from './style/global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'resume',
    element: <Resume />,
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
