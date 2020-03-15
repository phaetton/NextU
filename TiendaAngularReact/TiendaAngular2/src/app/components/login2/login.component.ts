import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //Importar los componentes ForModule, FormControl y Validator para manejar y validar los formularios
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string; //definir la variable error de tipo srting
  loginForm : FormGroup; //Definir la variable formulario como un FormGroup
  items: FirebaseListObservable<any[]>;
  email : string;
  password: string; 

  //===========================================================
  // Constructor
  //==========================================================

  constructor(private db: AngularFire, private auth : AuthService, private router: Router) {
    if(this.auth.checkSession()){
       this.router.navigate(['tienda'])
     }
  };


  //===========================================================
  // Métodos de inicialización
  //==========================================================

  ngOnInit() {
    this.email = "";
    this.password = "";
    if(this.auth.checkSession()){ //Verificar si existe una sesión iniciada
      this.router.navigate( ['/tienda'])
    }
    this.loginForm = new FormGroup(
      {
        'email' : new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
      }
    )
  }

  checkLogin(){
    if(this.loginForm.valid){ /*Si el formulario se envía correctamente*/

      //================================================================================================================
      // Dar formato al email eliminando el caracter @ y . para que coincida con el valor alojado en la base de datos
      //================================================================================================================
      this.email = this.loginForm.value.email.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\./g,'');
      this.password = this.loginForm.value.password; /*Asignar el valor password del formulario al valor password del objeto Usuario*/

      //================================================================================================================
      //  De acuerdo a   documentación de firebase2:
      //  Asignar la ruta usuarios seguido del email con su nuevo formato en la base de datos a consultar
      //================================================================================================================
      let loginUser = `/usuarios/${this.email}`
      const user = this.db.database.object(loginUser);
      user.subscribe(data => {
        if(data.$exists()){ //Verificar la existencia del usuario
          console.log ('Email correcto: ' + data.email)
          if (data.password == this.password){ //Si el usuario existe, verificar su contraseña
            this.mensaje = "Iniciando Sesión"; /*Mostrar mensaje en el formulario*/
            sessionStorage.setItem("Session", this.email); /*Definir el sessionStorage la llave "Session" con el valor del email validado*/
            console.log(this.mensaje); /*Mostrar mensaje en cónsola*/
            this.router.navigate(['tienda']); /*Redireccionar a la tienda*/
          }else{
            this.mensaje = 'Contraseña incorrecta'; /*Mostrar mensaje  de error  en formulario*/
            console.log(this.mensaje); /*Mostrar mensaje en cónsola*/
          }
        }else{
          this.mensaje = "El usuario" + this.loginForm.value.email + " no existe"; /*Mostrar mensaje de error en el formulario*/
          console.log(this.mensaje)
        }
      });
    }
  }

  /*checkLogin(){
  let loginUser = new Usuario; //Crear un objeto con las propiedades de Usuario
  if(this.loginForm.valid){ /*Si el formulario se envía correctamente
  loginUser.email = this.loginForm.value.email.toLowerCase(); /*Asignar el valor email del formulario al valor email del objeto Usuario*/
  /*  loginUser.password = this.loginForm.value.password; /*Asignar el valor password del formulario al valor password del objeto Usuario*/
  /*this.auth.getUsuarios().subscribe((data:Usuario[]) => {
  /*Recorrer el array de usuarios*/
  /*for( let i in data){
  /*Comparar que existe el email*/
  /*if (data[i].email == loginUser.email){
  console.log("Email: " +data[i].email+ " encontrado"); /*Mostrar mensaje en cónsola.*/
  /*Si el email coincide, Verificar la contraseña*/
  /*if (data[i].password == loginUser.password ){
  console.log("Iniciando sesión"); /*Mostrar mensaje en cónsola*/
  /*this.mensaje = "Iniciando Sesión"; /*Mostrar mensaje en el formulario*/
  /*sessionStorage.setItem("Session", loginUser.email); /*Definir el sessionStorage la llave "Session" con el valor del email validado*/
  /*this.router.navigate(['tienda']); /*Redireccionar a la tienda*/
  /*} else {
  /*console.log("Error de contraseña"); /*Mostrar mensaje en cónsola*/
  /*this.mensaje = 'Contraseña incorrecta'; /*Mostrar mensaje  de error  en formulario*/
  /*  }
} else {
this.mensaje = "El usuario" +loginUser.email+ " no existe"; /*Mostrar mensaje de error en el formulario*/
/*}
}
})
}
}*/


}
