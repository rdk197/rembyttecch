import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

window.addEventListener('error', (e) => {
  document.body.innerHTML = '<pre style="color:red;padding:20px;white-space:pre-wrap;font-size:14px;">JS ERROR: ' + e.message + '\n' + (e.error?.stack || '') + '</pre>';
});

window.addEventListener('unhandledrejection', (e) => {
  document.body.innerHTML = '<pre style="color:red;padding:20px;white-space:pre-wrap;font-size:14px;">PROMISE ERROR: ' + (e.reason?.message || e.reason) + '</pre>';
});

try {
  createRoot(document.getElementById('root')).render(<App />);
} catch (err) {
  document.body.innerHTML = '<pre style="color:red;padding:20px;white-space:pre-wrap;font-size:14px;">RENDER ERROR: ' + err.message + '\n' + err.stack + '</pre>';
}
