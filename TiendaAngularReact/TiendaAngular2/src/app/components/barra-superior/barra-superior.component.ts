import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
//======================Importar Servicios======================================
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';
//==============================================================================


@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
})
export class BarraSuperiorComponent implements OnInit {
  private url : string

  constructor(private auth : AuthService, //Agregar el servicio AuthService para interactuar con los parámetros de sesión
              private carritoService : CarritoService, //Agergar el servicio CarritoService para interactuar con los items del carrito
              private activatedRoute : ActivatedRoute //incluir el módulo ActivatedRoute para determinar el url actual
            ) { }

  ngOnInit() {
      this.url =  this.activatedRoute.snapshot.url[0].path; //Verificar el url actual
      return this.url;
  }

  cerrarSesion(){
    this.auth.logout(); //Ejecutar la funcion de cerrar sesión
  }

}
