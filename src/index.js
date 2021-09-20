import React from 'react';

import ReactDOM from 'react-dom';
import './styles/global.css'

import Cadastro from './pages/cadastro/index'
import Checkout from './pages/checkout/index'
import Loja from './pages/loja/index'



ReactDOM.render(
  <React.StrictMode>
    <Loja/>
  </React.StrictMode>,
  document.getElementById('root')
);

