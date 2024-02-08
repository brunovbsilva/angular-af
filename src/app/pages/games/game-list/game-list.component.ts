import { Component, EventEmitter, Output, input } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';
import { IGameCard } from '../game-card/interfaces/game-card.interface';
import { AFSwipableDirective } from '../../../shared/directives/af-swipable/af-swipable.directive';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameCardComponent,
    AFSwipableDirective
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  games = input<IGameCard[]>([]);
  title = input.required<string>();
  @Output() onSeeAll: EventEmitter<void> = new EventEmitter<void>();
}
