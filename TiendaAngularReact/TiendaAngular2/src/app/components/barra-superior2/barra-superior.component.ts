import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private auth : AuthService) { }
  contadorCarrito = true;
  ngOnInit() {
  }

  cerrarSesion(){
    this.auth.logout();
  }

  contadorCarrito(){
    this.mostrarContador = !this.mostrarContador;
  }

} 
