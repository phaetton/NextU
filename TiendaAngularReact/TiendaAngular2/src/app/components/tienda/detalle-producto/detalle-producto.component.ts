import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'; //incluir el módulo ActivatedRoute para enviar como parámetro el valor de id
//======================Importar Servicios======================================
import { AuthService } from "../../../services/auth.service";
import { TiendaService} from '../../../services/tienda.service';
import { CarritoService} from '../../../services/carrito.service';
import { BarraSuperiorComponent  } from '../../barra-superior/barra-superior.component';
//======================Importar Modelos========================================
import { Producto } from '../../../models/Producto';
import { ProductoCarrito } from '../../../models/ProductoCarrito';
//==============================================================================

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  private informacionProducto : Producto; //Crear una variable con las propiedades del Producto
  private productoCarrito : ProductoCarrito; //Crear una variable con las propiedades del Producto en el carrito

  constructor(private tiendaService : TiendaService,
    private router : Router,
    private auth : AuthService,
    private carritoService : CarritoService,
    private activatedRoute : ActivatedRoute) { }

    ngOnInit() {
      if (!this.auth.checkSession()){ //Verificar que exista una sesión iniciada
        this.router.navigate(['/login'])
      }else{
        this.detalleProducto() //Mostrar el detalle del producto actual
      }
    }
    //================Detalle Productos=============================================
    detalleProducto(){
    this.activatedRoute.params.subscribe(params => { //Obtener el parámetro id enviado en la URL
      if(this.tiendaService.cargarCatalogo()){ //Si el catálogo no ha sido inicializado
        this.informacionProducto = this.tiendaService.getDetalleProductos(params['id']); //Obtener el detalle del producto enviando como parámetro el id del producto
      }else{
        this.tiendaService.getProductos().subscribe( //Si el catálogo ha sido inicializado
          () => {
            this.checkCarrito(); //Verificar si existen productos en el carrito
            this.informacionProducto = this.tiendaService.getDetalleProductos(params['id']); //Obtener el detalle del producto enviando como parámetro el id del producto
          }) 
        }
      });
    }
    //================Agregar Productos=============================================
    agregarProducto(id:number, value:number){ //Enviar el id y valor como parámetro
    for (let item of this.tiendaService.productosCatalogo){ //Recorrer el arreglo de productos cargados
      if(item.id == id){ //Verificar coincidencias del producto actual del arreglo con el parámetro enviado a la función
        if(item.disponible < value){ //Verificar que el valor sea menor que el valor actual disponible
          window.alert('Máxima existencia es: '+ item.disponible); //mostrar mensaje de alerta
        }else{
          let cantidadActual = item.disponible; //Crear una variable con la cantidad disponible en el catalogo
          this.productoCarrito = {//Convertir el objeto de la tienda en objeto carrito
            "id": item.id,
            "descripcion": item.descripcion,
            "imagen": item.imagen,
            "precio": item.precio,
            "cantidad": value //Asignar el valor enviádo como parámetro desde el campo de texto del producto
          }
          this.carritoService.verificarCarrito(this.productoCarrito); //Verificar si el producto se encuentra en el carrito
          item.disponible = cantidadActual - value;//Actualizar el valor del producto en el catalogo

        }
      }
    }
  }
  //================Obtener Cantidad De Productos En Carrito======================
  obtenerCantidad(id:number){ //Enviar el id del producto como parámetro
    for(let item of this.carritoService.listaCarrito){ //Recorrer el arreglo de objetos almacenados en el carrito
      if(item.id == id){ //Verificar que el id recibido como parámetro coincida don el del objeto actual.
        return item.cantidad
      }
    }
    return null
  }
  //================Actualizar Existencias========================================
  checkCarrito(){
    for(let itemCarrito of this.carritoService.listaCarrito){ //Recorrer el arreglo de productos almacenados en el carrito
      this.tiendaService.actualizarDisponible(itemCarrito.id, itemCarrito.cantidad) //Ejecutar la funcion actualizar disponible enviando como parámetros el id y la cantidad en el carrito
    }
  }
  //================Navegacion Atras=============================================
  navegacionAtras(id:number){ //Navegar entre productos en vista detalle recibiendo como parámetro el id del URL actual
    let value = Number(id-1); //Restarle una unidad al valor del id actual
    if(value >= 0){ //Verificar que el valor sea mayor o igual a cero
      return value; //Devolver el resultado como parámetro
    }
    return id //Devolver el id actual
  }
  //================Navegacion Siguiente=========================================
  navegacionSiguiente(id:number){ //Navegar entre productos en vista detalle recibiendo como parámetro el id del URL actual
    if(id < this.tiendaService.cargarCatalogo().length){ //Verificar que el id actual sea menor que la cantidad de productos en el catálogo
      let value = Number(id+1); //Sumarle una unidad al valor del id actual
      return value; //Devolver el resultado como parámetro
    }
    return id //Devolver el id actual
  }
}
