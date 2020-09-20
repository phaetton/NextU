import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Injectable()
export class DataService {
  private usuarios: string = "";
  private productos: string = "";

  constructor(private httpService : HttpService) { }

  getUsers(){
    this.httpService.getUsuarios()
      .subscribe(
        (data: Response) => {this.usuarios = JSON.stringify(data)},
        err => {},
        () => {}
      )
    return this.usuarios;
  }

  getProds(){
    return this.httpService.getProductos();
  }

  updateStock(index, stock){
    let resp;
    this.httpService.updateStock(index, stock).subscribe(
      (data: Response) => {resp = JSON.stringify(data)},
      err => {},
      () => {}
    );
    return resp;
  }
}
