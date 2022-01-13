import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './infrastructure/msw/browser';

import App from './App';

// this should be use it only for dev environment, but at this moment will work for all environments
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
