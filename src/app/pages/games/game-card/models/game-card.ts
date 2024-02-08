import { IGameCardButton } from "../interfaces/game-card-button.interface";
import { IGameCard } from "../interfaces/game-card.interface";

export class GameCard implements IGameCard {
  imageUrl: string;
  name: string;
  location: string;
  dateFrom: number;
  dateTo: number;
  buttons: IGameCardButton[];

  constructor(card: IGameCard) {
    this.imageUrl = card.imageUrl;
    this.name = card.name;
    this.location = card.location;
    this.dateFrom = card.dateFrom;
    this.dateTo = card.dateTo;
    this.buttons = card.buttons;
  }
}