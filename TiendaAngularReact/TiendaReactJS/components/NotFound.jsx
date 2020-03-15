import React from 'react'; 
import { Redirect, Link } from 'react-router-dom';
import BarraNavegacion from './tienda/BarraNavegacion.jsx';

class NotFound extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  //==================Component Will Mount========================================
  componentWillMount(){
  }
  //==============================================================================
  //                    Render
  //------------------------------------------------------------------------------
  render(){
    if(!sessionStorage.getItem('Session')){                                       //Verificar que exista sesion iniciada
      return <Redirect to="/" />
    }

    return(
      <div className="error row">
        <div className="container">
          <BarraNavegacion contador={this.contadorCarrito()}/>
          <div className="left lista-productos box">
            <div className="col s12 blue darken-1 animated fadeInDown fast">
              <h4 className="col s12 white-text left center-align ">Página no encontrada</h4>
            </div>
            <div className="col s12 center-align" style={{padding: '5%'}}>
              <div  style={{height : 'calc(70vh - 100px)', display : 'table-cell', verticalAlign : 'middle'}} ><img style={{height : '100px',}} src="../../assets/img/error.png"/> <h5>Hubo un error al cargar la página. Lo invitamos a dar un paseo por nuestra <Link to="/tienda">Tienda Virtual</Link></h5></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  //==============================================================================
  //                    Funciones
  //------------------------------------------------------------------------------
  //==============================================================================
  //                    Verificar items en carrito
  itemsCarrito(){
    if(sessionStorage.getItem("Carrito")){                                    //Verificar si la sesión del carrito contiene información
      this.state.listaCarrito = JSON.parse(sessionStorage.getItem("Carrito")); //Actualizar la información del carrito con la sesión actual en formato JSON
      return JSON.parse(sessionStorage.getItem("Carrito"));                    //Devolver los items del carrito en formato JSON
    }
    return 0;                                                                  //Devolver 0 si no existen carritos
  }
  //--------------------Contador de items en menu---------------------------------
  contadorCarrito(){
    return this.itemsCarrito().length //Contar la cantidad de items en el carrito
  }
}
export default NotFound;
