import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { CarritoComponent } from '../carrito/carrito.component';

export const routes:Routes=[
    {path:'menu',component:MenuComponent},
    {path:'detalleproducto/:id', component:DetalleProductoComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'',redirectTo:'/menu',pathMatch:'full'}
];