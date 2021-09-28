import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})

export class ListarLivrosComponent implements OnInit {
  
  livros: Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livros = this.listarTodos();
    this.livros = [
      new Livro(1, "A Metamorfose", true),
      new Livro(2, "O Crepusculo dos Idolos",true),
      new Livro(3, "Deuses Americanos", false)
    ]
  }
  
  listarTodos(): Livro[] {
    return this.livroService.listarTodos();
  }
}
