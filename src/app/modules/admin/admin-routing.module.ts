import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../productos/pages/productos/productos.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: "admin",component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
