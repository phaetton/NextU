import { Component, OnInit } from '@angular/core'; 
import { ChangeDetectorRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'; //Inyectar el componente router para manejar redirecciones URL
import 'rxjs/Rx';
//======================Importar Servicios======================================
import { AuthService } from "../../services/auth.service";
import { CarritoService } from '../../services/carrito.service';
import { TiendaService } from '../../services/tienda.service';
//======================Importar Modelos========================================
import { Producto } from '../../models/Producto';
import { ProductoCarrito } from '../../models/ProductoCarrito';
//==============================================================================

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public listaCarrito : ProductoCarrito[] = []; //Crear un arreglo de productos para almacenar los productos guardados en el carrito
  public catalogo : Producto[] = []; //Crear un arreglo de productos para almacenar los productos guardados en el catalogo
  public titulo: string;

  constructor(private carritoService : CarritoService,
              private detectChanges:ChangeDetectorRef,
              private tiendaService : TiendaService,
              private auth : AuthService,
              private http : Http, private router : Router
            ) {
    this.titulo = 'Carrito de compras';
   }

  ngOnInit() {
    if (!this.auth.checkSession()){
      console.log(sessionStorage.getItem("Session"))
      this.router.navigate(['/login'])
    }else{
      this.listaCarrito = this.carritoService.itemsCarrito();
    }
  }

  //==============Calcular Totales================================================
    total(){
      let total :number = 0 //Inicializar los totales
      let items = this.carritoService.listaCarrito; //Iniciar la variable items con los items actuales en el carrito
      for(let subtotal of items ){ //recorrer los items dentro del carrito
       total += subtotal.cantidad * subtotal.precio; //Realizar el producto entre la cantidad y el precio y agregarlo al valor guardado anteriormente
      }
      return total; //Devolver el valor de la suma total de todos lso subtotales del producto
    }
  //=============Pagar Carrito==================================================
  pagarCarrito(){
    this.http.get('https://tienda-angular2.firebaseio.com/productos/.json') //Realizar una consulta a la base de datos
    .map((response : Response) => {
        this.catalogo =  response.json() //Asignar el valor obtenido en la consulta al arreglo de objetos catalogo
      }
    ).subscribe(
      ()=>{
        for (let itemCatalogo of this.catalogo){ //Recorrer el arreglo de productos obtenidos de la base de datos
          for (let item of this.listaCarrito){ //Recorrer el arreglo de productos en el carrito
            if ( itemCatalogo.id == item.id ){ //Comparar el id del producto del carrito con el id del producto almacenado en la base de datos
              let cantidad = Number(item.cantidad); //obtener la cantidad del producto actual en el carrito
              itemCatalogo.disponible = itemCatalogo.disponible - cantidad //Restar la disponibilidad del producto en la base de datos con la cantidad actual en el carrito
              this.actualizarDisponible(item.id, itemCatalogo).subscribe( //Ejecutar la funcion actualizarDisponibles enviando como parámetros el id y el objeto Producto en la base de datos
                (response) => {
                  this.vaciarCarrito() //Ejecutar la funcion vaciaCarrito
                }
              )
            }
          }
        }
        this.router.navigate(['/tienda']) //Redireccionar a la tienda
      }
    )
  }
  actualizarDisponible(id:number, itemCatalogo:Producto){
    return this.http.put(`https://tienda-angular2.firebaseio.com/productos/${id}.json`, itemCatalogo) //Ejecutar el método put a la url de la base de datos enviando como parámetro el objeto Producto con su nuevos valores disponibles
    .map((response : Response) => {
        return this.catalogo =  response.json() //Asignar a la lista de productos actuales el valor actualizado de los productos en la base de datos
      }
    )
  }
  //============Vaciar los items del carrito====================================
    vaciarCarrito(){
    sessionStorage.setItem('Carrito', '[]') //Asignar como parámetro un array vacío en formato string a la sesion Carrito
    this.listaCarrito = []; //Vaciar el arreglo de productos almacenados en el carrito
    this.carritoService.eliminarCarrito(this.listaCarrito); //Recorrer el arreglo de la lista almacenada en el servicio carritoService
    this.carritoService.listaCarrito = []; //Vaciar el arreglo en el servicio carritoService
    this.tiendaService.getProductos().subscribe() //Cargar de nuevo los productos desde la base de datos
    }
  //================Eliminar Productos Carrito==================================
    eliminarProducto(id:number, value:number){ //Obtener el id y valor de la cantidad de unidades del producto a eliminar
      for(let item of this.listaCarrito){ //recorrer el arreglo de productos almacenados en el carrito
        if(item.id == id){ //Verificar coincidencias entre el id del producto en el arreglo del carrito y el id recibido como parámetro
          let index = this.listaCarrito.indexOf(item); //Verificar la posición del producto actual en el arreglo de productos almacenados en el carrito
          if(value == null){ //Si no se envían cantidades del producto a eliminar (se elimina el ITEM juto a las cantidades del carrito)
            this.listaCarrito.splice(index, 1); //Eliminar el objeto Producto en la posición actual del item en el arreglo de objetos
            this.carritoService.eliminarCarrito(this.listaCarrito); //Actualizar la sesión de productos en el carrito
            this.total(); //Actualizar los totales en la vista carrito
            this.tiendaService.actualizarDisponible(id, Number(item.cantidad), true); //Ejecutar la función actualizar disponibles enviando como parámetros el id del producto, la cantidad y especificar que devolver el item es verdadero
          }else{
            if(value > 0){ //Si el valor es mayor que 0
               //Verificar que la cantidad indicada no sea mayor a la existente en el carrito
              let validar = (Number(item.cantidad) - value); //Crear una variable que almacene la resta de la cantidad actual con la cantidad recibida como parámetro a eliminar del carrito
              if(validar < 0){ //Si el resultado es menor a 0
                window.alert('La cantidad indicada excede a la cantidad en el carrito.'); //Ejecutar mensaje de alerta
              }else{
                item.cantidad = validar; //Asignar el valor de la resta obtenida en la propiedad cantidad del Objeto actual
                if (item.cantidad == 0) { //Verificar que se eliminen todos las unidades existentes en el carrito
                  //Si se eliminan las cantidades existentes en el carrito, eliminar el producto
                  this.listaCarrito.splice(index, 1);
                }
                //Asignar la nueva existencia al carrito
                this.carritoService.eliminarCarrito(this.listaCarrito); //Actualizar la información del arreglo de objetos de la sesion Carrito
                this.tiendaService.actualizarDisponible(id, Number(value), true); //Ejecutar la función actualizar disponibles enviando como parámetros el id del producto, la cantidad y especificar que devolver el item es verdadero
              }
            }else{
            window.alert('Debe especificar una cantidad válida'); //Mostrar mensaje de alerta si existe algún error
            }
          }
        }
      }this.detectChanges.detectChanges(); //Actualizar los cambios en la vista
    }
  //==============================================================================
}
