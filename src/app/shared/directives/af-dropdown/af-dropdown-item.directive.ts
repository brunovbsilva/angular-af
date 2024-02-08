import { Directive, ElementRef, OnInit, input } from '@angular/core';

@Directive({
  selector: '[AFDropdownItem]',
  standalone: true
})
export class AFDropdownItemDirective implements OnInit {

  icon = input<string>();

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.insertIcon();
  }

  private insertIcon(): void {
    const span = document.createElement('span');
    span.classList.add('material-symbols-rounded');
    span.innerHTML = this.icon()!;
    this.element.nativeElement.insertBefore(span, this.element.nativeElement.firstChild);
  }

}
