import { Component, Input } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { DataService } from '../data.service';

@Component({
  selector: 'carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {
  private show: boolean = false;
  private items: {nombre: string, unidades: Number, precio: Number, subtotal: Number, imagen: string}[] = [];
  private total: Number = 0;
  private allItems: any;
  private cart: any;

  @Input() catalogo: CatalogoComponent;
  showCatalog(){
    this.catalogo.showCatalog();
    this.hideCart();
  }

  showCart(cart, allItems){
    this.total = 0;
    this.items = [];
    this.allItems = allItems;
    this.cart = cart;
    for (var i in cart) {
      let word = cart[i].nombre;
      let unidades = cart[i].cantidad;
      let myItem = allItems.filter(c => c.nombre.toLowerCase() === word.toLowerCase());
      let subtotal = Number(myItem[0].precio) * Number(unidades);
      let precio = Number(myItem[0].precio);
      let imagen = myItem[0].imagen;
      let json = {nombre: word, unidades: unidades, precio: precio, subtotal: subtotal, imagen: imagen};
      this.items.push(json);
      this.total = Number(this.total) + Number(subtotal);
    }
    this.show = true;
  }

  pay(){
    for (var i in this.cart) {
      let index = this.getIndex(this.allItems, this.cart[i].nombre);
      let stock = Number(this.allItems[index].stock);
      this.dataService.updateStock(index, stock);
    }
    alert('Gracias por su compra.');
    window.location.reload();
  }

  getIndex(allItems, name){
    for (var i in allItems){
      if (allItems[i].nombre === name){
        return i;
      }
    }
    return 0;
  }

  hideCart(){
    this.show = false;
  }

  constructor(private dataService: DataService) { }
}
