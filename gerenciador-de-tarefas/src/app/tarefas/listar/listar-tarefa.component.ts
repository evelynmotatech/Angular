import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '..';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})

export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, "Tarefa 01", false),
      new Tarefa(2, "Tarefa 02", true)
    ]
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }
}
