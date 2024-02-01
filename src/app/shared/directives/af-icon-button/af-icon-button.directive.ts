import { Directive, ElementRef, OnInit, input } from '@angular/core';
import { Theme } from '../models/theme.type';

@Directive({
  selector: '[AFIconButton]',
  standalone: true
})
export class AFIconButtonDirective implements OnInit {
  
  theme = input<Theme | undefined>(undefined);
  icon = input.required<string>();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.setStyle();
    this.insertIcon();
  }

  private setStyle(): void {
    this.element.nativeElement.classList.add('af-icon-button');
    if(this.theme()) this.element.nativeElement.classList.add(`af-icon-button--${this.theme()}`);
  }

  private insertIcon(): void {
    const span = document.createElement('span');
    span.classList.add('material-symbols-rounded');
    span.innerHTML = this.icon();
    this.element.nativeElement.appendChild(span);
  }

}
