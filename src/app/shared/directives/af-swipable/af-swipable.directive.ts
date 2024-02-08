import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[AFSwipable]',
  standalone: true
})
export class AFSwipableDirective {

  @Output() public rightSwipe = new EventEmitter<void>();
  @Output() public leftSwipe = new EventEmitter<void>();
  @Output() public downSwipe = new EventEmitter<void>();
  @Output() public upSwipe = new EventEmitter<void>();
  @Output() public rightSwipeDistance = new EventEmitter<number>();
  @Output() public topSwipeDistance = new EventEmitter<number>();

  private xDown: number | null = null;
  private yDown: number | null = null;

  @HostListener('touchstart', ['$event'])
  public onTouchstart(event: TouchEvent): void {
    if(event.target && (event.target as HTMLElement).closest('[AFSwipable]')) {
      event.stopPropagation();
    }
    const firstTouch = event.touches[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  @HostListener('touchmove', ['$event'])
  public onTouchmove(event: TouchEvent): void {
    if (!this.xDown || !this.yDown) return;

    const xDiff = this.xDown - event.touches[0].clientX;
    const yDiff = this.yDown - event.touches[0].clientY;

    this.rightSwipeDistance.emit(xDiff);
    this.topSwipeDistance.emit(yDiff);
  }

  @HostListener('touchend', ['$event'])
  public onTouchend(event: TouchEvent): void {
    if (!this.xDown || !this.yDown) return;

    const xDiff = this.xDown - event.changedTouches[0].clientX;
    const yDiff = this.yDown - event.changedTouches[0].clientY;
    const isHorizontalSwipe = Math.abs(xDiff) > Math.abs(yDiff);
    
    if( !(Math.abs(xDiff) > 50 || Math.abs(yDiff) > 50) ) return;

    if (isHorizontalSwipe) {
      xDiff > 0 ? this.leftSwipe.emit() : this.rightSwipe.emit();
    } else {
      yDiff > 0 ? this.upSwipe.emit() : this.downSwipe.emit();
    }

    this.resetValues();
  }

  private resetValues(): void {
    this.xDown = null;
    this.yDown = null;
  }

}
