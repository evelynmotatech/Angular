import { Component, OnInit } from '@angular/core';
import { Paciente, SistemaService } from '..';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {

  
  constructor(private sistemaService: SistemaService) { }

  ngOnInit(): void {    
  }
  
}
