import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarefaService, Tarefa } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', {static:true})formTarefa: NgForm;

  tarefa:Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; //Capturar o parêmetro da rota
    this.tarefa = this.tarefaService.buscarPorId(id); //Usar o método de buscar por id, uma vez que o parâmetro id já está acessível
  }
  
  atualizar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}