import { Theme } from "../../../../shared/directives/models/theme.type";

export interface IGameCardButton {
  name: string;
  theme: Theme;
  onClick(event: MouseEvent): void;
}