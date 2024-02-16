import { Component, input } from '@angular/core';
import { Theme } from '../../directives/models/theme.type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  text = input<string>('');
  theme = input<Theme | undefined>();

  getClasses() {
    return {
      'chip': true,
      'chip--primary': this.theme() === 'primary',
      'chip--accent': this.theme() === 'accent',
      'chip--warn': this.theme() === 'warn',
      'chip--error': this.theme() === 'error',
    }
  }
}
