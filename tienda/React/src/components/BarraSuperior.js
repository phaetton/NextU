import React from 'react';
import { Link } from 'react-router-dom';
import '../css/barra-superior.css';

class BarraSuperior extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      }
  }

  emptyCart(){
    if (this.props.count === 0) {
      alert("Carro de compras vacío. Agregue algunos productos primero.");
    } else{
      this.props.showComponent("carro");
    }    
  }

  render(){
    return (
      <nav className="white darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">La bodega</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='../store'><i className="icon ion-md-apps"></i></Link></li>
            <li><a href="#" onClick={this.emptyCart.bind(this)} className="cart-icon"><i className="icon ion-md-cart"></i>
              <span className="new badge cart-badge" data-badge-caption="">{this.props.count}</span>
            </a></li>
            <li><Link to='/'><i className="icon ion-md-filing"></i></Link></li>
            <li><Link to='/'><i className="icon ion-md-exit"></i></Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default BarraSuperior;
