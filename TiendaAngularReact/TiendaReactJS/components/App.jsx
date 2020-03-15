import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'
import update from 'immutability-helper'; //Manejo de arrays
import * as firebase from 'firebase';
import {IntlProvider, FormattedMessage} from 'react-intl';

import BarraNavegacion from './tienda/BarraNavegacion.jsx';
import Carrito from './tienda/Carrito.jsx';
import Tienda from './tienda/Tienda.jsx';
import Catalogo from './tienda/Catalogo.jsx';
import Producto from './tienda/Producto.jsx';

class App extends React.Component{ 
  constructor(props) {
    super(props)
    this.state = {
      catalogo: [],
      productos: [],
      listaCarrito : [],
    }
  }
  //============================================================================
  //                    Component Will Mount
  //----------------------------------------------------------------------------
  componentWillMount(){

  }
  //============================================================================
  //                    Render
  //----------------------------------------------------------------------------
  render(){
    return(
      <div className="tienda row">
        <div className="container">
          <Route exact path='/tienda/catalogo' activeClassName="active"  component={ Tienda }/>
          <Route exact path='/tienda/carrito'  activeClassName="active" component={ Carrito  }/>
          <Route path='/tienda/producto/:idProducto'  activeClassName="active" component={ Producto } />
        </div>
      </div>
    )
  }

  }
  export default App;
