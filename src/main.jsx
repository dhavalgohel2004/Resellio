import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/style.css';
import './assets/js/script.js';
import App from './App.jsx';

import "@fontsource/baskervville"; // Normal weight
import "@fontsource/libre-baskerville"; // Normal weight
import "@fontsource/outfit"; // Default weight



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
