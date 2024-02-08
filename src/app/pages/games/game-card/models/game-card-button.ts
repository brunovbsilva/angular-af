import { Theme } from "../../../../shared/directives/models/theme.type";
import { IGameCardButton } from "../interfaces/game-card-button.interface";

export class AcceptButton implements IGameCardButton {
  name: string;
  theme: Theme;
  constructor(name: string) {
    this.name = name;
    this.theme = "primary";
  }
  onClick(): void {
    throw new Error("Method not implemented.");
  }
}

export class RejectButton implements IGameCardButton {
  name: string;
  theme: Theme;
  constructor(name: string) {
    this.name = name;
    this.theme = "error";
  }
  onClick(): void {
    throw new Error("Method not implemented.");
  }
}

export class JoinButton implements IGameCardButton {
  name: string;
  theme: Theme;
  constructor(name: string) {
    this.name = name;
    this.theme = "accent";
  }
  onClick(): void {
    throw new Error("Method not implemented.");
  }
}