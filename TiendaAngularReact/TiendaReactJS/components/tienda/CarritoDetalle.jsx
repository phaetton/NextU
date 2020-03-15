import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

class CarritoDetalle extends React.Component { 


  //===============================================================================
  //                    Constructor
  //------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = { //Inicializar variables
      inputValue : 0,
      subtotal: 0,
      listaProductos: [],
      productoCarrito : {
        id : '',
        descripcion : '',
        imagen : '',
        cantidad : '',
      },
    };
  }
  //==============================================================================
  //                    Component Will Mount
  //------------------------------------------------------------------------------
  componentWillMount(){
    this.subtotal(this.props.precio, this.props.cantidad)                           //Ejecutar la función subtotal enviando como parámetros el precio del producto actual y la cantidad
    this.setState({listaProductos : JSON.parse(sessionStorage.getItem('Carrito'))}) //Actualizar el estado de la vatiable listaProductos con el valor de la sesion del carrito en formato JSON
  }
  //==============================================================================
  //                    Render
  //------------------------------------------------------------------------------
  render() {
    return (
      <div className="col s12 animated fadeIn fast">
        <div className="card horizontal">
          <div className="card-image">
            <Link to={`/producto/${this.props.id}`}>
              <img src={this.props.imagen}/>
            </Link>
          </div>
          <div className="card-stacked">
            <button onClick={() => this.eliminarProducto(true)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">delete</i></button>
            <div className="card-content">
              <div className="informacion blue-grey-text text-darken-2">
                <p className="card-title">{this.props.descripcion}</p>
                <p><b>Precio: </b><FormattedMessage   id="precio"  defaultMessage={`$ {precio, number}`} values={{precio : this.props.precio}}  /></p>
                <p><b>Cantidad: </b>{this.props.cantidad ? this.props.cantidad : 'Agotado'}</p>
                <div className="input-group" >
                  <div className="file-field input-field">
                    <button  onClick={this.eliminarProducto.bind(this)} className="btn orange darken-4 input waves-effect waves-light" type="button" disabled={ (this.props.cantidad <= 0) ? true : false } > <i className="material-icons">delete</i></button>
                    <div className="file-path-wrapper">
                      <input type="number" value={this.state.inputValue} disabled={ (this.props.cantidad <= 0 ) ? true : false } min="0" max={this.props.cantidad} className="form-control right-align" onChange={evt => this.updateInputValue(evt)}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-action z-depth-2">
          <div className="no-padding col s12 right-align">
            <h5 className="animated pulse fast" ><b>Subtotal: </b> <FormattedMessage   id="subtotal"  defaultMessage={`$ {subtotal, number}`} values={{subtotal : this.state.subtotal}}  /></h5>
          </div>
        </div>
      </div>

    )
  }
  //======================EventListener para campo de busqueda====================
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  //==============================================================================
  subtotal(precio, cantidad){
    let subtotal = Number(cantidad) * Number(precio);                               //Crear una variable con el producto de la cantidad y el precio enviados como parámetros en formato Number
    this.setState({subtotal : subtotal})                                            //Devolver el valor del arreglo
  }

  eliminarProducto(remover:Boolean = false){                                    //Función para actualiar la eliminarProducto del carrito
    let cantidad = (Number(this.props.cantidad) - Number(this.state.inputValue))    //Guardar la cantidad obtenida entre la cantidad en el carrito y el valor del campo de texto
    if(cantidad < 0 || this.state.inputValue < 0){                                  //Si el resultado es menor que 0 o el valor en el campo de texto es menor que cero
      alert('Verifique la cantidad a eliminar')                                     //Mostrar mensaje de error
      return                                                                        //Salir de la función
    }
    this.state.productoCarrito.id =  this.props.id;                                 //Asignar los valores correspondientes a los campos en el estado actual de la variable roductoCarrito
    this.state.productoCarrito.descripcion =  this.props.descripcion;
    this.state.productoCarrito.imagen =  this.props.imagen;
    this.state.productoCarrito.precio =  this.props.precio;
    this.state.productoCarrito.cantidad = cantidad;

    this.props.actualizarDisponible(this.state.productoCarrito, cantidad, remover)     //Ejecutar la función actualizarDisponible enviando como parámetro el producto actial junto a la cantidad al valor de la variable remover
    this.subtotal(this.props.precio, cantidad)                                        //Ejecutar la funcion subtotal para actualizar los subtotales de acuerdo a la nueva cantidad
    this.setState({productoCarrito : JSON.parse(sessionStorage.getItem("Carrito"))})  //Actualizar el estado de la variable productoCarrito con el calor de la sesión Carrito en formato JSON
  }

  removerItem(item){                                                              //Funcion para remover el item del carrito
    const index = this.state.listaProductos.indexOf(item);                        //Enconrar la posición del item en el arreglo
    if (index < 0 ) return                                                        //Si se encuentra el producto
    this.state.listaProductos.splice(index, 1)                                    //Eliminarlo del arreglo
    this.setState({listaProductos: this.state.listaProductos})                    //Actualizar el estado de la variable listaProductos
  }

}


export default CarritoDetalle
