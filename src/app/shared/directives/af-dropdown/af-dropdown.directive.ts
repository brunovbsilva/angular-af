import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Host, HostListener, Inject, computed, effect, input, signal } from '@angular/core';

export type VerticalOpen = 'top' | 'bottom';
export type HorizontalOpen = 'left' | 'right';

@Directive({
  selector: '[AFDropdown]',
  standalone: true
})
export class AFDropdownDirective implements AfterViewInit {

  verticalOpen = input<VerticalOpen>('bottom');
  horizontalOpen = input<HorizontalOpen>('right');
  private isOpen = signal(false);
  trigger = input.required<string>();
  triggerFor = input.required<string>();

  private _trigger!: HTMLElement;
  private _triggerFor!: HTMLElement;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
    effect(() => {
      if (this.isOpen())
        this._triggerFor.classList.add('af-dropdown__list--open');
      else
        this._triggerFor.classList.remove('af-dropdown__list--open');

      this.setTransform();
    })
    effect(() => {
      if(this._triggerFor) {
        this.setTransform();
      }
    })
  }

  private setTransform(): void {
    this._triggerFor.style.transform = `translate(${this.getCurrentTransformX()}px, ${this.getCurrentTransformY()}px)`;
  }
  private getCurrentTransformX(): number {
    return this.horizontalOpen() === 'left' ? -this._triggerFor.offsetWidth + this._trigger.offsetWidth : 0;
  }
  private getCurrentTransformY(): number {
    return this.verticalOpen() === 'top' ? -this._triggerFor.offsetHeight : this._trigger.offsetHeight;
  }

  ngAfterViewInit(): void {
    this._trigger = this.element.nativeElement.querySelector(this.trigger());
    this._triggerFor = this.element.nativeElement.querySelector(this.triggerFor());
    this._triggerFor.style.top = `0`;
    this._triggerFor.style.left = `0`;

    this.setClasses();
  }

  private toggleDropdown(): void {
    this.isOpen.update(x => !x);
  }

  private setClasses(): void {
    this.element.nativeElement.classList.add('af-dropdown');
    this._trigger.classList.add('af-dropdown__trigger');
    this._triggerFor.classList.add('af-dropdown__list');
    this._triggerFor.querySelectorAll('a')
      .forEach((element: HTMLElement) => element.classList.add('af-dropdown__item'));
  }

  @HostListener('document:click', ['$event'])
  private onClick(event: MouseEvent): void {
    const containsTrigger = this._trigger.contains(event.target as Node);
    const containsTriggerFor = this._triggerFor.contains(event.target as Node);
    if (this.isOpen() || containsTrigger || containsTriggerFor){
      this.toggleDropdown();
    }
  }

  @HostListener('document:scroll')
  @HostListener('document:resize')
  private checkDropdownPosition(): void {}

}
