import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faShoppingBasket, faSignOutAlt, faStore, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  titulo = 'tienda';
  iconocarrito=faShoppingCart;
  iconocanasta=faShoppingBasket;
  iconosalir=faSignOutAlt;
  iconotienda=faStore;
  iconolleno=faGripHorizontal;
  constructor() { }

  ngOnInit(): void {
  }

}
