import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AtendimentoService, Atendimento } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-atendimentos',
  templateUrl: './editar-atendimentos.component.html',
  styleUrls: ['./editar-atendimentos.component.css']
})
export class EditarAtendimentosComponent implements OnInit {

  @ViewChild('formAtendimento', {static:true})formAtendimento: NgForm;

  atendimento:Atendimento;

  constructor(
    private atendimentoService: AtendimentoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; //Capturar o parêmetro da rota
    this.atendimento = this.atendimentoService.buscarPorId(id); //Usar o método de buscar por id, uma vez que o parâmetro id já está acessível
  }
  
  atualizar():void{
    if(this.formAtendimento.form.valid){
      this.atendimentoService.atualizar(this.atendimento);
      this.router.navigate(['/atendimentos']);
    }
  }
}