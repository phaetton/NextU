import React from 'react';
import '../css/login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class InicioSesion extends React.Component{
  constructor(props){
      super(props);
      document.body.classList.remove();
      document.body.classList.add("bg-login");
      this.state = {
        mail: '',
        pass: '',
        mailError: '',
        passError: '',
        loginError: '',
        toStore: false
      }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(pass){
    return pass !== '';
  }

  onChangeMail(e){
    e.preventDefault();
    if(this.validateEmail(e.target.value)){
      this.setState({mailError: ''})
    }else{
      this.setState({mailError: 'Debes ingresar un email válido'})
    }
    this.setState({mail: e.target.value});
  }

  onChangePass(e){
    e.preventDefault();
    if(this.validatePassword(e.target.value)){
      this.setState({passError: ''})
    }else{
      this.setState({passError: 'Contraseña requerida'})
    }
    this.setState({pass: e.target.value});
  }

  login(mail, pass){
    axios.get('https://tiendaphaetton.firebaseio.com/usuarios/.json')
      .then(response => {
        for (let user of response.data){
          if (user.mail === mail){
            if (user.password === pass){
              console.log("Welcome");
              //this.error=false;
              //this._router.navigate(['store']);
              this.setState({toStore: true});
            }
          }
        }
        this.setState({loginError: 'Correo electrónico y/o Contraseña incorrectos.'});
    });
  }

  submit(e){
    e.preventDefault();
    if (this.state.mail === '' && this.state.pass === '') {
      alert('Ingrese datos.');
    }
    else if ((this.state.mailError === '' && this.state.passError === '') &&
              !(this.state.mail === '' || this.state.pass === '')) {
        this.login(this.state.mail, this.state.pass);
    }
    else {
      alert('Complete el formulario.');
    }
  }

  render(){
    if (this.state.toStore === true) {
      console.log('Redirect to store');
      return <Redirect to='/store' />
    }

    return (
      <div className="main-container">
        <div className="login-box center">
          <div className="login-title">Inicia Sesión</div>
          <form onSubmit={this.submit.bind(this)}>
            <label className="label-form-group error">{this.state.loginError}</label>
            <div className="form-group">
              <label className="label-form-group">Correo electrónico:</label>
              <input onChange={this.onChangeMail.bind(this)} className="input-form-group" id="email" type="email" name="email"/>
            </div>
            <label className="error">{this.state.mailError}</label>
            <div className="form-group">
              <label className="label-form-group">Contraseña:</label>
              <input onChange={this.onChangePass.bind(this)} className="input-form-group" id="password" type="password" name="password"/>
            </div>
            <label className="error">{this.state.passError}</label>
            <div className="form-group">
              <button type="submit" className="form-button" >Ingresar</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default InicioSesion;
