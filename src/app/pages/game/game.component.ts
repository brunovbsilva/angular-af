import { Component, input, signal } from '@angular/core';
import { ImageCarrousselComponent } from './image-carroussel/image-carroussel.component';
import { GameScheduleInfoComponent } from '../../shared/components/game-schedule-info/game-schedule-info.component';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ImageCarrousselComponent,
    GameScheduleInfoComponent,
    UserCardComponent,
    ReadMoreComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  lorem50 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, vel ducimus rem laboriosam, ipsum qui accusamus, cupiditate fugit dolores quibusdam placeat error aperiam. Nam eligendi maxime numquam dolorem tenetur ea beatae ducimus magni repellat! Maxime, quasi amet velit sapiente animi suscipit earum. Assumenda perferendis blanditiis rerum amet numquam molestias placeat.';
  lorem3 = 'Lorem ipsum dolor.';
  date = signal(new Date().getTime());
  images = [
    'https://i.ibb.co/4KRxxvv/image.png',
    'https://i.ibb.co/j54wp8r/299402380-1563519310732369-3422017991721224876-n.jpg',
    'https://i.ibb.co/4KRxxvv/image.png',
    'https://i.ibb.co/j54wp8r/299402380-1563519310732369-3422017991721224876-n.jpg',
    'https://i.ibb.co/4KRxxvv/image.png',
    'https://i.ibb.co/j54wp8r/299402380-1563519310732369-3422017991721224876-n.jpg',
    'https://i.ibb.co/4KRxxvv/image.png',
    'https://i.ibb.co/j54wp8r/299402380-1563519310732369-3422017991721224876-n.jpg',
    'https://i.ibb.co/4KRxxvv/image.png',
    'https://i.ibb.co/j54wp8r/299402380-1563519310732369-3422017991721224876-n.jpg',
  ];
}
