import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component'
import { NavbarComponent } from './navbar/navbar.component'
import { VprincipalComponent } from './vprincipal/vprincipal.component'
import { VcomprasComponent } from './vcompras/vcompras.component'
import { SeguridadComponent } from './seguridad/seguridad.component'
import { VistadetalladaComponent } from './vistadetallada/vistadetallada.component'


const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'home', component: VprincipalComponent, canActivate: [SeguridadGuard] },
  { path: 'compras', component: VcomprasComponent },
  { path: 'vistadetallada', component: VistadetalladaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
