import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyAIEmj4GhV5uj1iI9yM30DTQgXabiezy5w",
    authDomain: "tienda-angular2.firebaseapp.com",
    databaseURL: "https://tienda-angular2.firebaseio.com",
    projectId: "tienda-angular2",
    storageBucket: "tienda-angular2.appspot.com",
    messagingSenderId: "529996794003" 
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});
