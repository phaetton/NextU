import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; //Importar los componentes ForModule, FormControl y Validator para manejar y validar los formularios
import { AngularFire, FirebaseListObservable } from 'angularfire2'; //Importar los componentes AngularFire y FirebaseListObservable
import { Router } from '@angular/router';
//======================Importar Servicios======================================
import { AuthService } from "../../services/auth.service";
//==============================================================================
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


  constructor(private db: AngularFire, private auth : AuthService, private router: Router) {
    if(this.auth.checkSession()){
       this.router.navigate(['tienda'])
     }
  };

  ngOnInit() {
    this.email = ""; //inicializar la variable email como vacio
    this.password = ""; //inicializar la password como vacio
    if(this.auth.checkSession()){ //Verificar si existe una sesión iniciada
      this.router.navigate( ['/tienda']) //Redireccionar a la tienda
    }
    this.loginForm = new FormGroup(
      {
        'email' : new FormControl('', Validators.required), //Utilizar las propiedad requerida para el campo email
        'password': new FormControl('', Validators.required), //Utilizar las propiedad requerida para el campo password
      }
    )
  }

  checkLogin(){
    if(this.loginForm.valid){ /*Si el formulario se envía correctamente*/
      // Dar formato al email eliminando el caracter @ y "." para que coincida con el valor alojado en la base de datos
      this.email = this.loginForm.value.email.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\./g,'');
      this.password = this.loginForm.value.password; /*Asignar el valor password del formulario al valor password del objeto Usuario*/
      //console.log(this.email)
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
            sessionStorage.setItem("Session", this.loginForm.value.email); /*Definir el sessionStorage la llave "Session" con el valor del email validado*/
            console.log(this.mensaje); /*Mostrar mensaje en cónsola*/
            this.router.navigate(['tienda']); /*Redireccionar a la tienda*/
          }else{
            this.mensaje = 'Contraseña incorrecta'; /*Mostrar mensaje  de error  en formulario*/
            console.log(this.mensaje); /*Mostrar mensaje en cónsola*/
          }
        }else{
          this.mensaje = "El usuario " + this.loginForm.value.email + " no existe"; /*Mostrar mensaje de error en el formulario*/
          console.log(this.mensaje)
        }
      });
    }
  }
}
