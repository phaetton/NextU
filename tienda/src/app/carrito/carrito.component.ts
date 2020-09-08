import { Component, OnInit } from '@angular/core';
import { Carrito } from "../compartido/carrito";
import { CarritoService } from "../services/carrito.service";
import { CARRITOS } from "../compartido/carritos";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carritos: Carrito[];
  carrito = CARRITOS;
  totalCompra=0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritos = this.carritoService.getCarritos();
    this.totalCompra=this.carritoService.getTotalCompra();
      
    });
  }

  eliminarCarrito(indice: number) {
    this.carrito.splice(indice, 1);
  }



  vaciarCarrito() {
    this.carrito.length = 0;
  }

  pagarCarrito() {
    this.carrito.length = 0;
  }
}
