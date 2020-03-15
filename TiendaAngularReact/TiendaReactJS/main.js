import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory, Link, Switch } from 'react-router-dom'
import {IntlProvider, FormattedMessage} from 'react-intl';
//=================Importar Componentes======================

import LoginForm from './components/Login.jsx';
import Tienda from './components/tienda/Tienda.jsx'; 
import Carrito from './components/tienda/Carrito.jsx';
import Producto from './components/tienda/Producto.jsx';
import NotFound from './components/NotFound.jsx';

ReactDOM.render(
<IntlProvider locale="en">
  <Router history={browserHistory}>
    <div>
    <Switch>
      <Route exact path="/" component={LoginForm}/>
        <Route exact path='/tienda' activeClassName="active"  component={ Tienda }/>
        <Route exact path='/carrito'  activeClassName="active" component={ Carrito  }/>
        <Route exact path='/producto/:idProducto'  activeClassName="active" component={ Producto } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </Router>
</IntlProvider> , document.getElementById('app')
)
