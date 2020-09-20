import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { CatalogoComponent } from '../catalogo/catalogo.component'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  ngOnInit() {
    document.body.classList.add("bg-main");
  }
}
