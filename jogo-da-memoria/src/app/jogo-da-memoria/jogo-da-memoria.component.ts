import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardData } from '../cardData';




@Component({
  selector: 'app-jogo-da-memoria',
  templateUrl: './jogo-da-memoria.component.html',
  styleUrls: ['./jogo-da-memoria.component.css'],
  //biblioteca do Angular que adiciona animações ao projeto
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
    ])
  ]
})

export class JogoDaMemoriaComponent implements OnInit {
  
  // a entrada é uma instância de CardData
  @Input() data: CardData;
  
  //ocorrências que irão se desencadear após o clique na carta
  @Output() cardClicked = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
}


