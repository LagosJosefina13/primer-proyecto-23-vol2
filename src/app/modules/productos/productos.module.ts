import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    JuguetesComponent,
    CollaresComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ], exports:[
    CardComponent,
    ProductosComponent,
    CollaresComponent,
    JuguetesComponent,
    IndumentariaComponent
  ]
  
  
})
export class ProductosModule { }
