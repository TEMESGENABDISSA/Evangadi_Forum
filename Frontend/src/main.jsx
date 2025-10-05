import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Root=ReactDom.createRoot(document.getElementById("root"));
Root.render (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
