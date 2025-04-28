// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import App (not Car directly)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // Render App (which includes Car)