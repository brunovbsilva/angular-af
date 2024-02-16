import { Router } from "@angular/router";
import { Theme } from "../../../../shared/directives/models/theme.type";
import { IGameCardButton } from "../interfaces/game-card-button.interface";
import { inject } from "@angular/core";

export class AcceptButton implements IGameCardButton {
  name: string;
  theme: Theme;
  constructor(name: string) {
    this.name = name;
    this.theme = "primary";
  }
  onClick(event: MouseEvent): void {
    event.stopPropagation();
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
  onClick(event: MouseEvent): void {
    event.stopPropagation();
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
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    throw new Error("Method not implemented.");
  }
}