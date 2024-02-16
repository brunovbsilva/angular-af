import { Router } from "@angular/router";
import { IGameCardButton } from "../interfaces/game-card-button.interface";
import { IGameCard } from "../interfaces/game-card.interface";
import { inject } from "@angular/core";

export class GameCard implements IGameCard {
  readonly id: string;
  imageUrl: string;
  name: string;
  location: string;
  dateFrom: number;
  dateTo: number;
  buttons: IGameCardButton[];
  
  private router: Router;

  constructor(card: IGameCard) {
    this.id = card.id;
    this.imageUrl = card.imageUrl;
    this.name = card.name;
    this.location = card.location;
    this.dateFrom = card.dateFrom;
    this.dateTo = card.dateTo;
    this.buttons = card.buttons;

    this.router = inject(Router);
  }

  onClick(): void {
    this.router.navigate(['game', this.id]);
  }
}