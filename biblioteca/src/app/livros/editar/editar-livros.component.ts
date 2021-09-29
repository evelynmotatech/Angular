import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService, Livro } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-livros',
  templateUrl: './editar-livros.component.html',
  styleUrls: ['./editar-livros.component.css']
})
export class EditarLivrosComponent implements OnInit {

  @ViewChild('formLivro', {static:true})formLivro: NgForm;

  livro:Livro;

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; //Capturar o parêmetro da rota
    this.livro = this.livroService.buscarPorId(id); //Usar o método de buscar por id, uma vez que o parâmetro id já está acessível
  }
  
  atualizar():void{
    if(this.formLivro.form.valid){
      this.livroService.atualizar(this.livro);
      this.router.navigate(['/livros']);
    }
  }
}