import { Component, Input } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  private show: boolean = false;
  private nombre: string = "";
  private imagen: string = "";
  private precio: string = "";
  private stock: string = "";
  private descripcion: string = "";

  @Input() catalogo: CatalogoComponent;
  showCatalog(){
    this.catalogo.showCatalog();
    this.hideDetails();
  }

  showDetails(nombre, imagen, precio, stock,descripcion){
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.show = true;
  }

  hideDetails(){
    this.show = false;
  }
}
