import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AFIconButtonDirective } from '../../shared/directives/af-icon-button/af-icon-button.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    AFIconButtonDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() onMenuClick: EventEmitter<void> = new EventEmitter<void>();
}
