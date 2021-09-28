import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroRoutes } from './livros/livros-routing.module';


export const router : Routes = [
    {
        path: '',
        redirectTo: 'livros/listar',
        pathMatch:'full'  //redireciona direto pra pasta raiz
    }, 
    ...LivroRoutes  //faz um merge das rotas de livros-routing.module aqui
];


@NgModule({
    imports :[
        RouterModule.forRoot(router)
    ],
    exports :[
        RouterModule
    ]
})

export class AppRoutingModule {}