import React from 'react';
import { BrowserRouter as Router, Route, NavLink , IndexRoute, Link } from 'react-router-dom';

class Main extends React.Component{
  render(){
      return(
          <nav className="blue darken-1"> 
            <div className="nav-wrapper">
              <Link to="/tienda" className="brand-logo text-shadow"><i className="material-icons">shopping_cart</i><p> VirtualStore</p></Link>
              <ul className="right">
                <li><NavLink  to="/tienda" activeClassName="active" className="text-shadow"><i className="material-icons">apps</i></NavLink ></li>
                <li><NavLink  to="/carrito" activeClassName="active" className="text-shadow"><i className="material-icons">shopping_cart</i><span hidden={(this.props.contador > 0) ? false : true } className="item-counter">{this.props.contador}</span></NavLink ></li>
                <li onClick={this.logout}><Link  to="/"><i className="material-icons text-shadow">assignment_return</i></Link ></li>
              </ul>
            </div>
          </nav>
        );
  }

  logout(){
    sessionStorage.removeItem('Session'); //Eliminar los datos de la sesión
  }
}
export default Main;
