import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AFIconButtonDirective } from '../shared/directives/af-icon-button/af-icon-button.directive';
import { Location } from '@angular/common';

@Component({
  selector: 'app-second-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AFIconButtonDirective
  ],
  templateUrl: './second-layout.component.html',
  styleUrl: './second-layout.component.scss'
})
export class SecondLayoutComponent {

  constructor(private router: Location) {}

  goBack() {
    this.router.back();
  }
}
