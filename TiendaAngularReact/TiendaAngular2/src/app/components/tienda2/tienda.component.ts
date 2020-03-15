import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";
import { BarraSuperiorComponent  } from '../barra-superior/barra-superior.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TiendaDatabaseService} from '../../services/tienda-database.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(private data : TiendaDatabaseService, private router : Router, private auth : AuthService) { }
  ngOnInit() {
    if (!this.auth.checkSession()){
      console.log(sessionStorage.getItem("Session"))
      this.router.navigate(['/login'])
    }
  }

} 
