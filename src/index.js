import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Artbex } from './Artbex'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Artbex />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)






