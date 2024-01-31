import { Directive, ElementRef, Input } from '@angular/core';

export type Theme = 'primary' | 'accent' | 'warn' | 'error';

@Directive({
  selector: '[AFButton]',
  standalone: true
})
export class AFButtonDirective {

  @Input() theme: Theme = 'primary';

  constructor(private element: ElementRef) {
    this.setStyle();
  }

  private setStyle(): void {
    this.element.nativeElement.classList.add('af-button');
    this.element.nativeElement.classList.add(`af-button--${this.theme}`);
  }

}
