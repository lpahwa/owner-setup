import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <App history={{push: function() {}}} match={{params: {todoId: null }, url: "/"}}/>
  </BrowserRouter>,
  document.getElementById('root')
);
