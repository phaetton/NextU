import React from 'react'; 
import { Redirect } from 'react-router-dom';
import update from 'immutability-helper'; //Manejo de arrays
import * as firebase from 'firebase';
import BarraNavegacion from './tienda/BarraNavegacion.jsx';
//import CatalogoRow from './tienda/CatalogoRow.jsx';
import Catalogo from './tienda/Catalogo.jsx';


class Tienda extends React.Component{


constructor(props) {
  super(props)
    this.state = {
      catalogo: [],
      productos: [],
      listaCarrito : [],
    }
    /*this.filtrarCatalogo = this.filtrarCatalogo.bind(this);
    this.actualizarDisponible = this.actualizarDisponible.bind(this)
    this.obtenerCantidad = this.obtenerCantidad.bind(this)*/
}



  render(){
    return(
     <p>test</p>
    )
  }

}

export default Tienda;

































/*
//==================Component Will Mount========================================
  componentWillMount(){
    if(this.state.catalogo == ""){                                                   //Verificar si se ha cargado previamente la información del catálogo
      alert('Inicializando Catalogo')
      const listaProductos = []                                                 //Arreglo temporal de objetos para almacenar todos los productos
      firebase.database().ref("productos").once("value").then((snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            listaProductos.push(childData);
        });
        this.setState({catalogo : listaProductos });
        this.setState({productos : this.state.catalogo});
      })
    }else{
      alert(this.state.catalogo)
    }
  }


//==============================================================================
  constructor(props) {
    super(props)
      this.state = {
        catalogo: [],
        productos: [],
        listaCarrito : [],
      }
      this.filtrarCatalogo = this.filtrarCatalogo.bind(this);
      this.actualizarDisponible = this.actualizarDisponible.bind(this)
      this.obtenerCantidad = this.obtenerCantidad.bind(this)
  }
//==============================================================================
      render(){
        return(
          <div className="tienda row">
            <div className="container">
            <BarraNavegacion contador={this.contadorCarrito()}/>
            <div className="left lista-productos box">
               <div className="row col s12 blue darken-1 animated fadeInDown fast">
                 <h4 className="col m6 s12 white-text left ">Cátalogo de productos</h4>
                 <h4 className="right col m6 s12 input-field">
                   <i className="material-icons prefix white-text">search</i>
                   <input onChange={this.filtrarCatalogo} type="text" id="descripcion" placeholder="aguacate"  type="text" className="white-text no-margin-bottom"/>
                   <label htmlFor="descripcion" className="white-text">¿Qué estás buscando?</label>
                 </h4>
               </div>
               {
                 this.mostrarProductos()
               }
             </div>

            </div>
          </div>
        )
  }

  mostrarProductos(){
    //console.log(this.state.productos)
    return this.state.productos.map(
              (producto) => { return <Catalogo key={ producto.id } id={producto.id}  nombre={ producto.nombre } imagen={ producto.imagen } descripcion={ producto.descripcion } disponible={ producto.disponible } precio ={producto.precio} actualizarDisponible={this.actualizarDisponible} obtenerCantidad={this.obtenerCantidad}/> }
            )
  }
  //============================================================================
  //                    Filtrar Productos
  //----------------------------------------------------------------------------
  filtrarCatalogo(event){
    this.state.productos = this.state.catalogo;                                 //Inicializar el catálogo de productos con la información de la base de datos
    let palabraFiltro = event.target.value.toLowerCase();                       //Pasar la infromación a minúsculas para hacerlas coincidir con el parámetro nombre en la base de datos
    let itemMatch = [];                                                         //Inicializar el arreglo de productos coincidentes

      for(let item of this.state.productos){                                    //Recorrer el arreglo de productos en el Catalogo
        let nombre = item.nombre.toLowerCase();                                 //crear una variable para comparar los productos
        if(nombre.includes( palabraFiltro )){                                   //Verificar que algún item del catálogo contenga los caracteres especificados en el campo de búsqueda
          itemMatch.push(item)}                                                 //Agregar el producto coincidente al arreglo
        }
      this.setState({productos : itemMatch});
      if(itemMatch.length == 0){
        this.state.productos = []
      }
      console.log(this.state.productos)
  }
 //=============================================================================
 //             Guardar Items en el carrito
 //--------------Actualizar Disponible------------------------------------------
    actualizarDisponible(item, cantidad, devolver:booleran = false){
      for (let productoLista of this.state.productos){
        if (productoLista.id == item.id){
          if(devolver == false){
            this.verificarCarrito(item, cantidad)
            productoLista.disponible = (Number(productoLista.disponible) - Number(cantidad))
          }
          else{
            productoLista.disponible = (Number(productoLista.disponible) + Number(cantidad))
          }
          this.setState({productos : this.state.productos})
          this.setState({listaCarrito : this.state.listaCarrito})
          console.log(this.state.listaCarrito)
        }
      }
    }

//-------------Verificar Carrito------------------------------------------------
  verificarCarrito(item, cantidad){
    if(this.guardarCarrito(item, cantidad) == false){                                     //Verificar que el item enviado como parámetro no exista previamente en el arreglo de objetos de productos
      this.state.listaCarrito.push(item)                                              //Si no existe agregarlo al arreglo
    }
    for(let item of this.state.listaCarrito){

    }
    this.setState({listaCarrito : this.state.listaCarrito})
    sessionStorage.setItem("Carrito", JSON.stringify(this.state.listaCarrito));        //Actualizar la sesion Carrito con los nuevos valores del arreglo en formato string
  }
//------------Agregar a Carrito-------------------------------------------------
guardarCarrito(item, cantidad){
  if(this.state.listaCarrito.length > 0){                                                     //Verificar que el carrito contenga informacion
    for(let itemGuardado of this.state.listaCarrito){                                        //Recorrer el arreglo de productos actuales en el carrito
      if(itemGuardado.id == item.id){                                                       //Verificar que el producto en el carrito coincida con el id del producto enviado como parámetro
        console.log(itemGuardado.descripcion +' Encontrado con: '+itemGuardado.cantidad + " Agregar: "+ cantidad)
        itemGuardado.cantidad = (Number(itemGuardado.cantidad) + Number(cantidad))
        return true //Devolver verdadero si el producto existia en el carrito
      }
    }
    return false; //Devolver falso si el producto no existia en el carrito
  }
  return false; //Devolver falso si el producto no existia en el carrito
}
//==============================================================================
//                    Verificar items en carrito
//---------------------Verificar carrito----------------------------------------
  checkCarrito(){
    for(let itemCarrito of this.state.listaCarrito){ //Recorrer el arreglo de productos almacenados en el carrito
      this.actualizarDisponible(itemCarrito.id, itemCarrito.cantidad) //Actualizar las cantidades de los productos a agregar en el carrito
    }
  }
//---------------------Verificar items en el carrito----------------------------
    itemsCarrito(){
      if(sessionStorage.getItem("Carrito")){                                    //Verificar si la sesión del carrito contiene información
        this.state.listaCarrito = JSON.parse(sessionStorage.getItem("Carrito")); //Actualizar la información del carrito con la sesión actual en formato JSON
        return JSON.parse(sessionStorage.getItem("Carrito"));                    //Devolver los items del carrito en formato JSON
      }
      return 0; //Devolver 0 si no existen carritos
    }
//--------------------Contador de items en menu---------------------------------
    contadorCarrito(){
      return this.itemsCarrito().length //Contar la cantidad de items en el carrito
    }
//--------------------Obtener Cantidad De Productos En Carrito------------------
  obtenerCantidad(id:number){
    for(let item of this.state.listaCarrito){ //Recorrer el arreglo de productos
      if(item.id == id){ //Comparar los id del producto en el arreglo con el id del producto enviado como parámetro
        return item.cantidad //Devolver la cantidad
      }
    }
    return null //Devolver vacio
  }
  componentDidMount(){
    console.log(this.state.productos)
    console.log('component Mounted')
    //console.log(sessionStorage.getItem("Carrito"))
    console.log(this.contadorCarrito())
  }
*/

//<Catalogo listado={this.state.productos} actualizarVistaDisponible={this.actualizarVistaDisponible.bind(this)}/>
