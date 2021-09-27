import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

//Dentro dos colchetes, irão ser declaradas as rotas; essa constante precisa ser exportada para poder ser utilizada em outros arquivos;
export const router: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/tarefas/listar'    
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{};
