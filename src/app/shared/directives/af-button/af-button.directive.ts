import { Directive, ElementRef, Input, OnInit, input } from '@angular/core';
import { Theme } from '../models/theme.type';

@Directive({
  selector: '[AFButton]',
  standalone: true
})
export class AFButtonDirective implements OnInit {

  theme = input<Theme>('primary');

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.setStyle();
  }

  private setStyle(): void {
    this.element.nativeElement.classList.add('af-button');
    this.element.nativeElement.classList.add(`af-button--${this.theme()}`);
  }

}
