import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DatabaseService {

  constructor( private http : Http ) { }
  getProductos(){
    return this.http.get('https://tienda-angular2.firebaseio.com/productos/.json')
    .map((response : Response) => response.json())
  } 

  /*login(email:string, password:string){
    let body = JSON.stringify({ email: email, password: password });
    console.log(email + " " + password);
    return this.http.post('https://tienda-angular2.firebaseio.com/usuarios/.json', body)
    .map(
      response => response.json()
    )
  }*/

  filterProductos(filtro){
    return this.http.get('https://tienda-angular2.firebaseio.com/productos/'+filtro+'.json')
    .map((response : Response) => response.json())
  }

}
