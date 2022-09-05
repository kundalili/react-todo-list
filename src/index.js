import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import Editor from './App';

import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <NavBar />
        <Editor />
      </BrowserRouter>
    </StyledEngineProvider>
    { /* eslint-disable-next-line */}
  </React.StrictMode>
);
