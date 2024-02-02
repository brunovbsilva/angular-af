import { Component, ViewChild, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AFDropdownDirective, HorizontalOpen, VerticalOpen } from '../shared/directives/af-dropdown/af-dropdown.directive';
import { AFIconButtonDirective } from '../shared/directives/af-icon-button/af-icon-button.directive';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    AFDropdownDirective,
    AFIconButtonDirective,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  @ViewChild('sidebar') sidebar!: SidebarComponent;
  verticalOpen = signal<VerticalOpen>('bottom');
  horizontalOpen = signal<HorizontalOpen>('right');

  constructor() {
    setTimeout(() => this.horizontalOpen.set('left'), 2000);
    setTimeout(() => this.verticalOpen.set('top'), 3000);
    setTimeout(() => this.horizontalOpen.set('right'), 4000);
    setTimeout(() => this.verticalOpen.set('bottom'), 5000);
  }
}
