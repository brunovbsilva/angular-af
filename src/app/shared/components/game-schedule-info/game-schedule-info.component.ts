import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-game-schedule-info',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './game-schedule-info.component.html',
  styleUrl: './game-schedule-info.component.scss'
})
export class GameScheduleInfoComponent {
  private datePipe: DatePipe

  dateFrom = input.required<number>();
  dateTo = input.required<number>();
  location = input.required<string>();
  
  dayName = computed(() => this.translate.instant(`day-names.${new Date(this.dateFrom()).getDay()}`));
  month = computed(() => this.datePipe.transform(this.dateFrom(), 'MMM'));
  day = computed(() => this.datePipe.transform(this.dateFrom(), 'dd'));

  constructor(private translate: TranslateService) {
    this.datePipe = inject(DatePipe);
  }
}
