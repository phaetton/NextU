import { Component, OnInit } from '@angular/core';
import { Carrito } from "../compartido/carrito";
import { CarritoService } from "../services/carrito.service";
import { CARRITOS } from "../compartido/carritos";


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {
cantidadCarrito =CARRITOS.length;
  constructor(private carritoService:CarritoService) {

   }
   cantidadC(){
    this.cantidadCarrito=CARRITOS.length;

   }
  ngOnInit(): void {
  }

}
