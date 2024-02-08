import { AfterViewInit, Component, computed, input, signal } from '@angular/core';
import { AFSwipableDirective } from '../../../shared/directives/af-swipable/af-swipable.directive';

@Component({
  selector: 'app-image-carroussel',
  standalone: true,
  imports: [
    AFSwipableDirective
  ],
  templateUrl: './image-carroussel.component.html',
  styleUrl: './image-carroussel.component.scss'
})
export class ImageCarrousselComponent implements AfterViewInit {

  imageUrls = input.required<string[]>();

  private _currentIndex = signal(0);
  currentIndex = this._currentIndex.asReadonly();
  currentImage = computed(() => this.imageUrls()[this._currentIndex()]);
  counter = computed(() => `${this._currentIndex() + 1}/${this.imageUrls().length}`);

  visibleDots = signal<number[]>([]);
  cornerDots = computed(() => {
    const dots = this.visibleDots();
    return [
      dots[0] == 0 ? -1 : dots[0] - 1,
      dots[dots.length - 1] == this.imageUrls().length - 1 ? -1 : dots[dots.length - 1] + 1
    ];
  })

  constructor() { }

  ngAfterViewInit(): void {
    this.visibleDots.set(this.getInitialRange());
  }

  setIndex(index: number) {
    this._currentIndex.set(index);
  }

  next() {
    this._currentIndex.update(x => x == this.imageUrls().length - 1 ? x : x+1);
    if(!this.visibleDots().includes(this.currentIndex()))
      this.visibleDots.update(x => [...x.slice(1), this.currentIndex()])
  }

  previous() {
    this._currentIndex.update(x => x == 0 ? x : x-1);
    if(!this.visibleDots().includes(this.currentIndex()))
      this.visibleDots.update(x => [this.currentIndex(), ...x.slice(0, -1)])
  }

  private getInitialRange() {
    const length = this.imageUrls().length;
    const maxIndex = length <= 4 ? length : 4;
    return Array.from({ length: maxIndex }, (_, i) => i);
  }
}
