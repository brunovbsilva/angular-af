import { IGameCardButton } from "./game-card-button.interface";

export interface IGameCard {
  imageUrl: string;
  name: string;
  location: string;
  dateFrom: number;
  dateTo: number;
  buttons: IGameCardButton[];
}