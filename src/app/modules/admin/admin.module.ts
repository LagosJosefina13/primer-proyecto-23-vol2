import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 //VISTA
import { AdminRoutingModule } from './admin-routing.module';
//COMPONENTE
import { TableComponent } from './components/table/table.component';
//ARCHIVO DE RUTAS
import { AdminComponent } from './pages/admin/admin.component';
//MATERIAL
import { MatIconModule } from '@angular/material/icon';
 
//ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    AdminComponent,
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
