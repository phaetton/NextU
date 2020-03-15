import React from 'react';
import ReactDOM from 'react-dom'; 
import * as firebase from 'firebase';
import * as request from 'superagent';
import {  BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
//=========Importar Componentes=========================
import LoginFirebase from './FirebaseDB.jsx';
//========================================================

const USUARIODB = firebase.database().ref().child('usuarios')

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { //Inicializar variables
      email: '',
      password: '',
      mensaje: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }
//================Verificar Sesión==============================================
  checkSession(){
    return sessionStorage.getItem("Session");
  }
//================Obtener Valor Inputs Formulario===============================
  handleChange(event) {
    if(event.target.id == "email"){ //Utilizar un eventListener para actualizar el valor de la variable email cuando este sea modificado
      this.setState({email: event.target.value});
    }
    if(event.target.id == "password"){ //Utilizar un eventListener para actualizar el valor de la variable password cuando este sea modificado
        this.setState({password: event.target.value});
    }
  }
//================Verificar Usuario=============================================
  checkLogin(event) {
    event.preventDefault(); //Prevenir que se envíe el formualrio

    let email = this.state.email.toLowerCase()
    let emailId = email.replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\./g,''); //Dar formato al email eliminando el caracter "@" y "." para que coincida con el string en la base de datos
    let password = this.state.password; //Almacenar la contraseña en una variable
    let mensajeLogin = '';

    USUARIODB.child(emailId).once('value', function(snapshot) { //Consultar en la base de datos el valor del email enviado
    let userData = snapshot.val();
      if (userData !== null) { //Verificar que la respuesta del servidor no sea nula.
        //alert('user ' + email  + ' exists!' + snapshot.val());
        //console.log(snapshot.val())
        console.log ('Email correcto: ' + userData.email)
        if (userData.password == password){ //Si el usuario existe, verificar su contraseña
          mensajeLogin = "Iniciando Sesión"; //Mostrar mensaje en el formulario
          sessionStorage.setItem("Session", email); //Definir el sessionStorage la llave "Session" con el valor del email validado
        }else{
          mensajeLogin = 'Contraseña incorrecta'; //Mostrar mensaje  de error  en formulario
        }
      }else{
        mensajeLogin = "El usuario " +email + " no existe"; //Mostrar mensaje de error en el formulario
      }
    });
    this.setState({mensaje : mensajeLogin}); //Asignar el valor del mensaje y mostrarlo en pantalla
    console.log(mensajeLogin)
  }
//==============================================================================

//============Acciones Will mount===============================================

//============Acciones Renderizado==============================================
    render(){
    if (this.checkSession()){
      return <Redirect to='/tienda'/>
    }
      return(
        <div className="login row">
          <div className="col s6 form-container animated fadeIn slow">
            <form onSubmit={this.checkLogin}>
              <h4 className="text-center white-text">Inicia Sesión</h4>
              <div className="col s12 input-field">
                <input type="email" ref="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="luis@email.com" className="validate white-text" required aria-required="true" />
                <label htmlFor="email" data-error="Error en formato de email. Ejemplo: correo@email.com" data-success="Formato de email correcto">Correo Electrónico</label>
              </div>
              <div className="col s12 input-field">
                <input type="password" ref="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="12345" className="validate  white-text" required aria-required="true" />
                <label htmlFor="password" data-error="Contraseña no puede ser vacía" className="white-text">Contraseña</label>
              </div>
              <div className="col s12 center-align">
                <div className="mensaje">
                {this.state.mensaje}
                </div>
                <button type="submit" className="btn btn-success" >Ingresar</button>
              </div>
            </form>
          </div>
        </div>
     );
    }
//==============================================================================
}
export default LoginForm;
