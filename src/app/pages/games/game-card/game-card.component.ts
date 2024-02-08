import { Component, computed, inject, input } from '@angular/core';
import { AFButtonDirective } from '../../../shared/directives/af-button/af-button.directive';
import { IGameCard } from './interfaces/game-card.interface';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    AFButtonDirective,
    DatePipe
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  private datePipe: DatePipe;

  card = input.required<IGameCard>();
  buttons = computed(() => this.card().buttons);
  dayName = computed(() => this.translate.instant(`day-names.${new Date(this.card().dateFrom).getDay()}`));
  month = computed(() => this.datePipe.transform(this.card().dateFrom, 'MMM'));
  day = computed(() => this.datePipe.transform(this.card().dateFrom, 'dd'));

  constructor(private translate: TranslateService) {
    this.datePipe = inject(DatePipe);
  }
}
