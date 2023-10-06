import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { CollaresComponent } from './pages/collares/collares.component';


const routes: Routes = [
  {
    path: "productos", component: ProductosComponent
  },
  {
    path: "juguetes", component:JuguetesComponent
  },
  {
    path: "indumentaria", component:IndumentariaComponent
  },
  {
    path: "collares",  component:CollaresComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }


