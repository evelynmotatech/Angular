import { Routes } from '@angular/router';
import { ListarLivrosComponent } from './listar';
import { CadastrarLivroComponent } from './cadastrar';
import { EditarLivrosComponent } from './editar';

export const LivroRoutes: Routes = [
  { 
      path:'livros',
      redirectTo: 'livros/listar'
  }, 
  { 
      path:'livros/listar',
      component: ListarLivrosComponent
  },
  {
    path: 'livros/cadastrar',
    component: CadastrarLivroComponent
  },
  {
    path:'livros/editar',
    component: EditarLivrosComponent
  }
];
