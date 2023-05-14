import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import './css/layout.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';
import 'bootstrap/dist/css/bootstrap.css';  

// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();