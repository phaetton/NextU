import {  Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //Importar los componentes ForModule, FormControl y Validator para manejar y validar los formularios
import { CurrencyPipe } from '@angular/common'
import { OnChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
//======================Importar Servicios======================================
import { AuthService } from "../../services/auth.service";
import { CarritoService} from '../../services/carrito.service';
import { TiendaService} from '../../services/tienda.service';
//======================Importar Modelos========================================
import { ProductoCarrito } from '../../models/ProductoCarrito';
import { Producto } from '../../models/Producto';
//=====================Importar Pipes===========================================
@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],

})
export class TiendaComponent implements OnInit {

  private formulario : FormGroup; //Definir la variable formulario como un FormGroup
  private listaProductos : Producto[]; //Crear un objeto con la lista de tiendas obtenidos de la base de datos
  public productoCarrito : ProductoCarrito; //Definir un objeto con las pro
  private titulo : string;
  public session : string;

  constructor(private detectChanges:ChangeDetectorRef,  //Agergar el modelo ChangeDetectorRef para refrescar el renderizado de la página al existir algún cambio en vivo
              private router : Router, //Agergar el módulo Router para manejar las URL de la página
              private tiendaService : TiendaService, //Agergar el servicio TiendaService para interactuar con los items del catálogo de productos
              private auth : AuthService, //Agergar el servicio CarritoService para interactuar con los parámetros de sesión
              private carritoService : CarritoService //Agergar el servicio CarritoService para interactuar con los items del carrito
            ) { this.titulo = 'Catálogo de Productos' /*Definir el título de la página acual*/}


  ngOnInit() {
    if (!this.auth.checkSession()){ //Verificar si existe una sesión iniciada
      this.router.navigate(['/login']) //Si existe una sesión, navegar a la página de login
    }else{
    this.session = sessionStorage.getItem("Carrito") //Iniciar la sesión de Carrito verificando si existen productos en el mismo
      this.formulario = new FormGroup( //Iniciar las variables del formulario
        {
          'descripcion' : new FormControl(),
          'imagen': new FormControl(),
          'precio': new FormControl(),
          'cantidad': new FormControl(),
        }
      )
      this.mostrarProductos() //Ejecutar la función mostrar productos
    }
  }

//================Cargar Productos==============================================
  mostrarProductos(){
    if(!this.tiendaService.productosCatalogo){ //Verificar si se ha cargado previamente la información del catálogo
      this.tiendaService.getProductos().subscribe( //Ejecutar la consulta a la base de datos
        ()=>{
          this.listaProductos = this.tiendaService.catalogo; //inicializar la lista de productos con la información de la base de datos
          this.checkCarrito(); //Verificar si existen productos en el carrito
        }
      )
    }else{
          this.listaProductos = this.tiendaService.productosCatalogo; //Si se ha cargado previamente la información del catálogo, asignar la información actual
    }
  }
//================Agregar Productos=============================================
  agregarProducto(id:number, value:number){
    for (let item of this.tiendaService.productosCatalogo){ //Recorrer el catálogo de productos
      if(item.id == id){ //Verificar que el id del item actual corresponda con el item del catálogo
        if(item.disponible < value){//Si la disponibilidad es menor a la cantidad a añadir al carrito
          window.alert('Máxima existencia es: '+ item.disponible); //Mostrar un mensaje de alerta con la cantidad maxima disponible
        }else{
          let cantidadActual = item.disponible; //Crear una variable con la cantidad disponible en el catalogo
          //Convertir el objeto de la tienda en objeto carrito
          this.productoCarrito = {
            "id": item.id,
            "descripcion": item.descripcion,
            "imagen": item.imagen,
            "precio": item.precio,
            "cantidad": value //Asignar el valor enviádo como parámetro desde el campo de texto del producto
          }
          this.carritoService.verificarCarrito(this.productoCarrito); //Verificar si el producto se encuentra en el carrito
          item.disponible = cantidadActual - value; //Actualizar el valor del producto en el catalogo
        }
      }
    }
  }
  //================Filtrar Productos============================================
    filtrarCatalogo(filtro:string){
      this.listaProductos = this.tiendaService.filtrarProducto(filtro); //Actualizar el catálogo de productos mostrados de acuerdo al resultado obtenido en el filtro de productos
    }
  //================Actualizar Disponibles============================================
    checkCarrito(){
      for(let itemCarrito of this.carritoService.listaCarrito){ //Recorrer el arreglo de productos almacenados en el carrito
        this.tiendaService.actualizarDisponible(itemCarrito.id, itemCarrito.cantidad) //Actualizar las cantidades de los productos a agregar en el carrito
      }
    }
  //================Obtener Cantidad De Productos En Carrito======================
  obtenerCantidad(id:number){
    for(let item of this.carritoService.listaCarrito){ //Recorrer el arreglo de productos
      if(item.id == id){ //Comparar los id del producto en el arreglo con el id del producto enviado como parámetro
        return item.cantidad //Devolver la cantidad
      }
    }
    return null //Devolver vacio
  }
  //==============================================================================
}
