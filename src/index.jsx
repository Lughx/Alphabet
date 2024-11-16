import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
const body = document.body
body.classList.add("bg-base")
body.classList.add("text-white")

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
