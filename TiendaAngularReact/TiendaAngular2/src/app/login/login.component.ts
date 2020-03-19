import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//variables
usuario='Rafael Serrano';
email='rafa.tesla@gmail.com';
botonh1='verificar';

//metodo
verificaUsuario(){
  alert('estamos verificando su usuario');
}



  constructor() { }

  ngOnInit(): void {
  }

}
