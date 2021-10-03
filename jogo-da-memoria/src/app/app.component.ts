import { Component, OnInit } from '@angular/core';
import { CardData } from './cardData';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from './restart-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // array que contém as imagens a serem exibidas
  cardImages = [
    '/bulbasaur.jpg',
    '/dratine.jpg',
    '/jigglipuff2.jpg',
    '/mew.jpg',
    '/mrminne.jpg',
    '/pikachu.jpg',
  ];
  // cards instanciado como Array de objeto CardData 
  cards: CardData[] = [];

  //  flippedCards instanciado como Array de objeto CardData 
  flippedCards: CardData[] = [];

  //contagem de pares combinados
  matchedCount = 0;

  //Método que embaralha as cartas de forma aleatória
  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  //método setupCards inicia junto com a página
  ngOnInit(): void {
    this.setupCards();
  }

  //padroniza o início do jogo, com as cartas viradas e gera pares para cada carta
  setupCards(): void {
    this.cards = [];
    //buscando as imagens em cardImages e iniciando no estado padrão(default)
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };
      //enviando as imagens em pares para o array
      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });
    // embaralhando as cartas
    this.cards = this.shuffleArray(this.cards);
  }

  //chamando o serviço MatDialog para abrir modais com estilo e animações
  constructor(private dialog: MatDialog) { }

  //método que altera o estado das cartas ao serem clicadas
  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    //verificando se o estado da carta é padrão e se tem menos do que duas viradas, se verdadeiro muda o estado da carta(flipped)
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      //se houverem duas cartas viradas, chama um método de checagem
      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }

      // se os pares não corresponderem as cartas voltam para o estado padrão(default)
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  //método que verifica a combinação das cartas
  checkForCardMatch(): void {

    //definindo um tempo padrao
    setTimeout(() => {

      //recebendo a carta virada na posição
      const cardOne = this.flippedCards[0];
      //recebendo carta virada na posição
      const cardTwo = this.flippedCards[1];

      // operador ternario verifica a compatibilidade das cartas e altera o estado de acordo com o resultado
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';

      //cardOne e CardTwo recebem o mesmo estado (matched/default)
      cardOne.state = cardTwo.state = nextState;


      this.flippedCards = [];

      //se as cartas combinaram , a contagem de pares combinados será incrementada
      if (nextState === 'matched') {

        this.matchedCount++;

        //se a contagem de combinações for igual ao número de imagens, vai abrir a mensagem de vitória 
        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }
    }, 1000);
  }

  //método que reinicia o jogo
  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

}