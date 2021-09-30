import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento } from '..';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})

export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.atendimentos = this.listarTodos();
  }

  listarTodos(): Atendimento[] {
    return this.atendimentoService.listarTodos();
  }

  alterarStatus(atendimento: Atendimento): void {
    if (confirm("Deseja alterar o status da atendimento do paciente: " + atendimento.nome + "?")) {
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }
  }

  remover($event:any, atendimento:Atendimento): void {
    $event.preventDefault();
    if (confirm("Deseja remover a atendimento do paciente: " + atendimento.nome + "?")) {
      this.atendimentoService.remover(atendimento.id);
      this.atendimentos = this.listarTodos();
    }
  }
}