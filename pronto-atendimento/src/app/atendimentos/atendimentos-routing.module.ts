import { Routes } from '@angular/router';
import { EditarAtendimentosComponent } from './editar';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { ListarAtendimentoComponent } from './listar';

export const atendimentoRoutes: Routes = [
  {
    path: 'atendimentos',
    redirectTo: 'atendimentos/listar'
  },
  {
    path: 'atendimentos/listar',
    component: ListarAtendimentoComponent
  },
  {
    path:'atendimentos/cadastrar',
    component: CadastrarAtendimentoComponent
  },
  {
    path: 'atendimentos/editar/:id',
    component: EditarAtendimentosComponent
  }
];