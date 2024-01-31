import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAfInput]',
  standalone: true
})
export class AFInputDirective {

  constructor(private element: ElementRef) {
    this.setStyle();
  }

  private setStyle(): void {
    this.element.nativeElement.classList.add('af-input');
  }

}
