import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http : Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                     'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUsuarios(){
    return this.http.get('https://tiendaphaetton.firebaseio.com/usuarios/.json')
      .map(
        (response: Response)=> response.json())
  }

  getProductos(){
    return this.http.get('https://tiendaphaetton.firebaseio.com/productos/.json')
      .map(
        response=> response.json())
  }

  updateStock(index, stock){
    let url = 'https://tiendaphaetton.firebaseio.com/productos/'+index+'/.json';
    let body = '{"stock": '+stock+'}';
    return this.http.patch(url, body, this.options).map(
      response => response.json())
  }
}
