import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  private usuarios: string = "";
  private error: boolean = false;

  constructor(private dataService: DataService, private _router: Router) { }

  ngOnInit() {
    document.body.classList.remove("bg-main");
    document.body.classList.add("bg-login");
    this.dataService.getUsers();
  }

  onIngresar(form){
    console.log(form);

    let email=form.value.email;
    let pass=form.value.password;

    this.usuarios=this.dataService.getUsers();

    for (let user of JSON.parse(this.usuarios)){
      if (user.mail === email){
        if (user.password === pass){
          console.log("Welcome");
          this.error=false;
          this._router.navigate(['store']);
          return true;
        }
      }
    }
    console.log("Get out!");
    this.error=true;
    return false;
  }

}
