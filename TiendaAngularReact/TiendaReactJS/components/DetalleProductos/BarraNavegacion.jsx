import React from 'react';

class BarraNavegacion extends React.Component{
  constructor(){
    super()
    this.state = { 

      }
    }
    render(){
        return(
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo text-shadow" href="#"><i className="material-icons">shopping_cart</i><p> VirtualStore</p></a>
              <ul className="right">
                 <li><Link to="/" className="text-shadow active"> <i className="material-icons">apps</i></Link></li>
                 <li><Link to="/tienda" className="text-shadow active"><i className="material-icons">shopping_cart</i><span className="item-counter">10</span></Link></li>
                 <li className="cursor "><a className="text-shadow"><i className="material-icons">assignment_return</i></a></li>
                 <div>{this.props.children}</div>
              </ul>
            </div>
          </nav>
       );
    }

    changeState(){

    }

}
export default BarraNavegacion;
