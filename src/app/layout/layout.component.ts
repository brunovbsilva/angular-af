import { Component, ViewChild, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AFSwipableDirective } from '../shared/directives/af-swipable/af-swipable.directive';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    AFSwipableDirective,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor() { }
}
