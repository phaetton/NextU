import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { Carrocompras } from '../objetos/carrocompras';
import { CarritoCompra } from '../objetos/carrito-compra';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent {

  items: AngularFireList<any[]>;
  nombre: string;
  imagen: string;
  precio: number;
  disponible: number;
  cantidad: number;
  total: number;
  descripcion: string;

  comprasdb: CarritoCompra[] = [];

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) { }

  getcatalogo() {
    return this.items = this.af.list('/productos');
  }

  actualizar($id, compra) {
    this.items.update($id, compra);
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  itemactual(nombre, imagen, precio, disponible, descripcion) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.disponible = disponible;
    this.descripcion = descripcion;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  anadirCompra(compra, total) {
    this.comprasdb.push(compra);
    this.total = total;
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    })
  }
}
