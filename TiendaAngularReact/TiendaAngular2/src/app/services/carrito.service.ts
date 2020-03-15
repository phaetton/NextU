import { Injectable } from '@angular/core'; 
//======================Importar Modelos========================================
import { ProductoCarrito } from '../models/ProductoCarrito';
//==============================================================================
@Injectable()
export class CarritoService {
  public listaCarrito : ProductoCarrito[] = []; //Crear un arreglo de productos para almacenar los productos guardados en el carrito
  private totales : number[]; //Arreglo numérico para almacenar los subtotales de los productos
  constructor() {
      this.totales = []; //Inicializar los totales
      this.contadorCarrito() //Verificar items en carrito
   }
//============Verificar items en el carrito=====================================
  itemsCarrito(){
    if(sessionStorage.getItem("Carrito")){ //Verificar si la sesión del carrito contiene información
      this.listaCarrito = JSON.parse(sessionStorage.getItem("Carrito")); //Actualizar la información del carrito con la sesión actual en formato JSON
      return JSON.parse(sessionStorage.getItem("Carrito")); //Devolver los items del carrito en formato JSON
    }
    return 0; //Devolver 0 si no existen carritos
  }
//============Contador de items en menu=========================================
  contadorCarrito(){
    return this.itemsCarrito().length //Contar la cantidad de items en el carrito
  }
//===Verificar existencia en el carrito para evitar items duplicados============
  verificarCarrito(item){
    if(this.guardarCarrito(item) == false){ //Verificar que el item enviado como parámetro no exista previamente en el arreglo de objetos de productos
      this.listaCarrito.push(item) //Si no existe agregarlo al arreglo
    }
    sessionStorage.setItem("Carrito", JSON.stringify(this.listaCarrito)); //Actualizar la sesion Carrito con los nuevos valores del arreglo en formato string
  }
//=============Guardar Items en el carrito======================================
  guardarCarrito(item){
    if(this.listaCarrito.length > 0){ //Verificar que el carrito contenga informacion
      for(let itemGuardado of this.listaCarrito){ //Recorrer el arreglo de productos actuales en el carrito
        if(itemGuardado.id == item.id){ //Verificar que el producto en el carrito coincida con el id del producto enviado como parámetro
          itemGuardado.cantidad = Number(itemGuardado.cantidad) + Number(item.cantidad) //Aumentar la cantidad del producto en el carrito
          return true //Devolver verdadero si el producto existia en el carrito
        }
      }
      return false; //Devolver falso si el producto no existia en el carrito
    }
    return false; //Devolver falso si el producto no existia en el carrito
  }
//=============Calcular Sub Totales=============================================
  subtotal(precio, cantidad){
    let subtotal = Number(cantidad) * Number(precio); //Crear una variable con el producto de la cantidad y el precio enviados como parámetros en formato Number
    this.totales.push(subtotal) //Agregar el subtotal al arreglo de subottales
    return subtotal //Devolver el valor del arreglo
  }
//=============Eliminar Carrito=================================================
  eliminarCarrito(listaCarrito){
    sessionStorage.setItem("Carrito", JSON.stringify(listaCarrito)) //Actualizar el valor de la sesión Carrito con los parámetros enviados
  }
//==============================================================================
}
