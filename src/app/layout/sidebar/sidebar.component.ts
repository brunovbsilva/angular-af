import { Component, input, signal } from '@angular/core';
import { ISidebarItem } from './interfaces/sidebar-item.interface';
import { AFButtonDirective } from '../../shared/directives/af-button/af-button.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    AFButtonDirective
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  itens = input<ISidebarItem[]>([]);
  private _isOpen = signal(true);
  isOpen = this._isOpen.asReadonly();

  toggleSidebar() {
    this._isOpen.update(value => !value);
  }

}
