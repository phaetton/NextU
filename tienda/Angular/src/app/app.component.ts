import { Component } from '@angular/core';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'angular';
}
