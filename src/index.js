import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Poke from './components/Poke';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Poke/>
  </React.StrictMode>
);
