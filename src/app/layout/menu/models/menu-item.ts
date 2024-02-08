import { inject } from "@angular/core";
import { IMenuItem } from "../interfaces/menu-item.interface";
import { Router } from "@angular/router";

export class MenuItem implements IMenuItem {

  icon: string;
  name: string;
  route: string;

  private router: Router;

  constructor(route: string, name: string, icon: string) {
    this.icon = icon;
    this.name = name;
    this.route = route;
    this.router = inject(Router);
  }

  active(): void {
    this.router.navigate([this.route]);
  }
}