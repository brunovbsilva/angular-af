import { IGameCardButton } from "./game-card-button.interface";

export interface IGameCard {
  readonly id: string;
  imageUrl: string;
  name: string;
  location: string;
  dateFrom: number;
  dateTo: number;
  buttons: IGameCardButton[];
  onClick(): void;
}