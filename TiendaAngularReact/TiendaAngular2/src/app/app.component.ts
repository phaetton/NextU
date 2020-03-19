import { Component } from '@angular/core';

//importamos los componentes y luego colocamos la etiqueta en el html
import { CarritoComponent } from "./carrito/carrito.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";

//los decoradores aplican acciones en segundo plano
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaAngular2';
  public comprador;
  
  constructor() { 
      //objeto
this.comprador = {
  id:'1';
  nombre:'Francisco',
  pass:'12345'
  }
}
}
