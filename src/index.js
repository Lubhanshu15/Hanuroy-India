import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    primary: '#113D26',
    primaryLight: '#2A5F3F',
    white: '#FFFFFF',
    text: '#333333',
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);