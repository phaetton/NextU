import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterAppComponent } from './router-app/router-app.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { VcomprasComponent } from './vcompras/vcompras.component';
import { VistadetalladaComponent } from './vistadetallada/vistadetallada.component';
import { VprincipalComponent } from './vprincipal/vprincipal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NavbarComponent,
    ObjetosComponent,
    PipesComponent,
    RouterAppComponent,
    SeguridadComponent,
    ServiciosComponent,
    VcomprasComponent,
    VistadetalladaComponent,
    VprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
