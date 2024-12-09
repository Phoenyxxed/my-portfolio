import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Correct import
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));  // Use createRoot
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);  // Render the App component inside StrictMode
