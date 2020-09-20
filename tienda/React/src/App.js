import React, { Component } from 'react';
import './App.css';
import Store from './components/Store';
import InicioSesion from './components/InicioSesion';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={InicioSesion} />
            <Route path="/store" component={Store} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
