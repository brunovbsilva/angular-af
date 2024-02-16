import { Component } from '@angular/core';
import { AFIconButtonDirective } from '../../directives/af-icon-button/af-icon-button.directive';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    AFIconButtonDirective,
    ChipComponent
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  openChat(): void {}
  addFriend(): void {}
}
