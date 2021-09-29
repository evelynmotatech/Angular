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
  }
  
  listarTodos(): Livro[] {
    return this.livroService.listarTodos();
  }

  alterarStatus(livro:Livro):void{
    if(confirm("Deseja alterar marcar como lido o livro: " +livro.titulo+ "?")){
      this.livroService.alterarStatus(livro.id);
      this.livros = this.listarTodos()
    }
  }

  remover($event:any, livro:Livro):void {
    $event.preventDefault();
    if(confirm("Deseja remover o livro " +livro.titulo+ " da lista de leitura?")){
      this.livroService.remover(livro.id);
      this.livros = this.listarTodos();
    }
  }
}
