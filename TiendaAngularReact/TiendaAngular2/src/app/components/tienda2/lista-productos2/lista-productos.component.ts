import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //Importar los componentes ForModule, FormControl y Validator para manejar y validar los formularios
import { TiendaDatabaseService} from '../../../services/tienda-database.service';
import { Producto } from '../../../models/Producto';
import { TiendaComponent } from '../tienda.component';
 import { OnChanges } from '@angular/core';


@Component({ 
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  formulario : FormGroup; //Definir la variable formulario como un FormGroup
  producto : Producto[];
  listaProductos : Object[];
  constructor(private productos : TiendaComponent, private data :TiendaDatabaseService) { }

  ngOnInit() { //inicializar
    this.listaProductos = this.data.listaProductos;
    // window.alert(this.listaProductos[0]['descripcion'])
    this.formulario = new FormGroup(
      {
        'descripcion' : new FormControl(),
        'imagen': new FormControl(),
        'precio': new FormControl(),
        'disponible': new FormControl(),
      }
    )


  }

  filtrarCatalogo(filter){
    console.log(filter);
    this.data.filtrarProductos(filter);
    /*let filtro = new Producto; //Crear un objeto con las propiedades de Usuario
    if(this.formulario.valid){ //Si el formulario se envía correctamente
      filtro.descripcion = this.formulario.value.filtro; //Asignar el valor email del formulario al valor email del objeto Usuario
      this.data.filtrarProductos()
    }*/
  }

  preventDefault(e){
    this.preventDefault(e)
  }

}
