
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/**
 * Main Entry Point for the App
 * Renders the App component to the root element
 */

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  