import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento.model'

@Injectable()
export class AtendimentoService {

  constructor() { }

  //método para listar todos os itens da classe atendimento que estão contidas na array 'atendimentos'. Caso não tenha nenhum item, a array retornará vazia.
  listarTodos(): Atendimento[]{
    const atendimentos = localStorage['atendimentos'];
    return atendimentos ? JSON.parse(atendimentos): [];
  }

  //método para cadastrar uma nova atendimento.
  cadastrar(atendimento: Atendimento): void{
    const atendimentos = this.listarTodos();
    atendimento.id = new Date().getTime();
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  //método para buscar um atendimento e poder atualizar algum de seus parâmetros;
  buscarPorId(id:number): Atendimento{
    const atendimentos: Atendimento[] = this.listarTodos();
    return atendimentos.find(atendimento => atendimento.id === id);
  }

  atualizar(atendimento: Atendimento): void{
    const atendimentos: Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if (atendimento.id === obj.id){
        objs[index] = atendimento;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  remover(id: number): void {
    let atendimentos: Atendimento[] = this.listarTodos();
    atendimentos = atendimentos.filter(atendimento => atendimento.id !== id);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  alterarStatus(id:number):void{
    const atendimentos: Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs) =>{
      if(id === obj.id){
        objs[index].concluido = !obj.concluido;
      }
      localStorage['atendimentos'] = JSON.stringify(atendimentos);
    })
  }
}
