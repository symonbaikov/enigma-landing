import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './galactic.css';
import './scroll-anims.css';
import './i18n/index.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
