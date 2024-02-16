import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-read-more',
  standalone: true,
  imports: [],
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
  text = input<string>('');
  charsLimit = input<number>(100);
  readMoreNeeded = computed(() => this.text().length > this.charsLimit());
  showAll = signal(false);
  showAllText = computed(() => this.showAll() ? ' Show less' : ' Show more');
  textToShow = computed(() => this.showAll() ? this.text() : `${this.text().slice(0, this.charsLimit())}...`);

  toggleShowAll() {
    this.showAll.update(value => !value);
  }
}
