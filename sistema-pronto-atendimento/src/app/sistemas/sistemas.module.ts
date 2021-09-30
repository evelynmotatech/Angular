import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaService } from './shared';
import { ListarPacientesComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarPacientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    SistemaService
  ]
})
export class SistemasModule { }
