import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TiendaComponent} from './components/tienda/tienda.component'
import { CarritoComponent} from './components/carrito/carrito.component'
import { DetalleProductoComponent} from './components/tienda/detalle-producto/detalle-producto.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tienda', component: TiendaComponent},
  { path: 'tienda/detalle-producto/:id', component: DetalleProductoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TiendaRoutingModule { } 
