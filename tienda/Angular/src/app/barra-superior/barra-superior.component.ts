import { Component, OnInit, Input } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  private count: Number;

  @Input() catalogo: CatalogoComponent;
  showCart(){
    this.catalogo.showCart();
  }

  constructor() { }

  ngOnInit() {
    this.count = Number(0);
  }

  emptyCart(){
    alert("Carro de compras vacío. Agregue algunos productos primero.");
  }

  addCartCount(cantidad) {
    this.count = Number(this.count) + Number(cantidad);
  }

}
