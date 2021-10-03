// interface cardData que recebe os atributos
export interface CardData {
  //recebe o identificador da imagem da carta
  imageId: string;

  //recebe a definição do estado das cartas
  state: 'default' | 'flipped' | 'matched';
}