import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model'

@Injectable()
export class TarefaService {

  constructor() { }

  //método para listar todos os itens da classe Tarefa que estão contidas na array 'tarefas'. Caso não tenha nenhum item, a array retornará vazia.
  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas): [];
  }

  //método para cadastrar uma nova tarefa.
  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //método para buscar uma tarefa e poder atualizar algum de seus parâmetros;
  buscarPorId(id:number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs)=>{
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id:number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefas => tarefas.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id:number):void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) =>{
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
      localStorage['tarefas'] = JSON.stringify(tarefas);
    })
  }
}
