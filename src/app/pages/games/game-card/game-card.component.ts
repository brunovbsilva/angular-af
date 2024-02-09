import { Component, computed, input } from '@angular/core';
import { AFButtonDirective } from '../../../shared/directives/af-button/af-button.directive';
import { IGameCard } from './interfaces/game-card.interface';
import { GameScheduleInfoComponent } from '../../../shared/components/game-schedule-info/game-schedule-info.component';
@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    AFButtonDirective,
    GameScheduleInfoComponent
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  card = input.required<IGameCard>();
  buttons = computed(() => this.card().buttons);

  constructor() { }
}
