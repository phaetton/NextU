import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
//======================Importar Modelos========================================
import { Producto } from '../models/Producto'
//==============================================================================

@Injectable()
export class TiendaService {
  public catalogo : Producto[]; //Crear arreglo de productos
  public productosCatalogo : Producto[]; //Crear arreglo de productos

  constructor(private http : Http, private router : Router) { }
  //================Obtener Productos===========================================
  public getProductos(){
  return this.http.get('https://tienda-angular2.firebaseio.com/productos/.json').map(
    (response : Response) => {
      this.catalogo =  response.json(); //Inicializar el arreglo de productos con los valores devueltos por el servidor
      this.productosCatalogo = this.catalogo //Inicializar el catálogo del producto con los valores de la base de datos
    })
  }
  //================Ir a la vista detalle del producto===========================
  public getDetalleProductos(idProduct:number) : Producto {
    for(let item of this.productosCatalogo) {
      if(item.id == idProduct) {
        return item;
      }
    }
    return null;
  }
  //================Verificar si se inicializó el catálogo======================
  cargarCatalogo(){
    return this.productosCatalogo
  }
  //================Filtrar Productos===========================================
  public filtrarProducto(filtro:string){
  this.productosCatalogo = this.catalogo;  //Inicializar el catálogo de productos con la información de la base de datos
  filtro.toLowerCase(); //Pasar la infromación a minúsculas para hacerlas coincidir con el parámetro nombre en la base de datos
  let itemMatch : Producto[] = []; //Inicializar el arreglo de productos coincidentes
  for(let item of this.productosCatalogo){ //Recorrer el arreglo de productos en el Catalogo
    let nombre = item.nombre.toLowerCase(); //crear una variable para comparar los productos
    if(nombre.includes(filtro)){ //Verificar que algún item del catálogo contenga los caracteres especificados en el campo de búsqueda
      itemMatch.push(item)} //Agregar el producto coincidente al arreglo
    }
    return itemMatch; //Devolver el arreglo a la vista
  }
  //================Actualizar Disponible=======================================
  actualizarDisponible(id:number, value:number, devolver:boolean = false){
    let catalogo = this.catalogo; //Crearuna variable que contenga los productos disponibles en el catálogo
    for(let itemCatalogo of catalogo){ //Recorrer el arreglo de productos
      if (itemCatalogo.id == id){ //Verificar que el item en en catálogo coincida con el valor id enviado cmo parámetro
        if(devolver == false){ //Verificar que NO se esté eliminando un producto del carrito
          itemCatalogo.disponible = (Number(itemCatalogo.disponible) - value); //Restar la cantidad actual en el carrito (cantidad) en los productos disponibles en el catálogo
        }else{
          itemCatalogo.disponible = (Number(itemCatalogo.disponible) + value); //Sumar la cantidad del carrito en disponibles
      }
        this.productosCatalogo = this.catalogo; //Actualizar la disponibilidad de los productos actuales con los valores devueltos/agregados
      }
    }
  }
  //============================================================================
}
