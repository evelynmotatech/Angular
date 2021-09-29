import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivrosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarLivroComponent } from './cadastrar';
import { EditarLivrosComponent } from './editar-livros/editar-livros.component';

@NgModule({
  declarations: [
    ListarLivrosComponent,
    CadastrarLivroComponent,
    EditarLivrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    LivroService
  ]
})
export class LivrosModule { }
