import { Component, effect, input, signal } from '@angular/core';
import { IMenuItem } from './interfaces/menu-item.interface';
import { MenuItem } from './models/menu-item';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menus = input<IMenuItem[]>([
    new MenuItem('/', '', 'home'),
    new MenuItem('/games', 'Games', ''),
    new MenuItem('/chats', 'Chats', ''),
  ]);
  currentMenu = signal<number>(this.menus().findIndex(menu => this.router.url == menu.route));

  constructor(private router: Router) {
    effect(() => this.menus()[this.currentMenu()].active());
  }

  next() {
    this.currentMenu.update(value => value == this.menus().length - 1 ? value : value + 1);
  }
  previous() {
    this.currentMenu.update(value => value == 0 ? value : value - 1);
  }
  setCurrentMenu(index: number) {
    this.currentMenu.set(index);
  }

}
