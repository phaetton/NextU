import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { CarroComponent } from '../carro/carro.component';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private productos: string = "";
  private items: Object;
  private itemsOriginal: any;
  private carroJson: {nombre: string, cantidad: Number}[] = [];
  private show: boolean = false;

  @Input() topBar: BarraSuperiorComponent;
  @Input() carro: CarroComponent;
  @Input() detalle: DetalleComponent;

  addCartCount(cantidad) {
    this.topBar.addCartCount(cantidad);
  }

  showDetails(nombre, imagen, precio, stock,descripcion) {
    this.detalle.showDetails(nombre, imagen, precio, stock,descripcion);
    this.hideCatalog();
  }

  showCart() {
    this.carro.showCart(this.carroJson, this.itemsOriginal);
    this.hideCatalog();
  }

  showCatalog(){
    this.show = true;
    this.carro.hideCart();
    this.detalle.hideDetails();
  }

  hideCatalog(){
    this.show = false;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProds().subscribe(
      (data: Response) => {this.productos = JSON.stringify(data)},
      err => {},
      () => {
        this.items = JSON.parse(this.productos);
        this.itemsOriginal = this.items;
      }
    );
    this.show = true;
  }

  onKey(event: any) {
    const word=event.target.value;
    if (word === ""){
        this.items = this.itemsOriginal;
    }
    else {
        this.items = this.itemsOriginal.filter(c => c.nombre.toLowerCase().includes(word.toLowerCase()));
    }
  }

  alCarrito(cantidad, nombre){

    let stock;
    let index;
    for (var i in this.items) {
       if (this.items[i].nombre === nombre) {
           stock = Number(this.items[i].stock);
           index = Number(i);
       }
    }

    if (stock>0 && cantidad<=stock){
      let obj = this.carroJson.filter(c => c.nombre.toLowerCase().includes(nombre.toLowerCase()))
      if (Object.keys(obj).length > 0){
        let nuevaCantidad = Number(cantidad) + Number(obj[0].cantidad);
        for (var i in this.carroJson) {
           if (this.carroJson[i].nombre === nombre) {
               this.carroJson[i].cantidad = nuevaCantidad;
           }
        }
      }
      else{
        let json = {nombre: nombre, cantidad: Number(cantidad)};
        this.carroJson.push(json);
      }
      this.items[index].stock = stock - cantidad;
      this.addCartCount(cantidad);
    }    
  }
}
