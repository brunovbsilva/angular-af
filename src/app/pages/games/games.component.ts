import { Component } from '@angular/core';
import { IGameCard } from './game-card/interfaces/game-card.interface';
import { AcceptButton, JoinButton, RejectButton } from './game-card/models/game-card-button';
import { GameListComponent } from './game-list/game-list.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    GameListComponent
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  games: IGameCard[];
  invites: IGameCard[];

  constructor() {
    const game = {
      name: 'Custom game',
      imageUrl: 'https://i.ibb.co/4KRxxvv/image.png',
      location: 'Campinas, SP',
      dateFrom: new Date().getTime(),
      dateTo: new Date().getTime(),
      buttons: [
        new AcceptButton('Accept'),
        new RejectButton('Reject')
      ]
    };
    const intive = {
      name: 'Custom game',
      imageUrl: 'https://i.ibb.co/4KRxxvv/image.png',
      location: 'Campinas, SP',
      dateFrom: new Date().getTime(),
      dateTo: new Date().getTime(),
      buttons: [
        new JoinButton('Join'),
      ]
    };
    this.games = [
      intive,
      intive,
      intive,
      intive,
      intive
    ];
    this.invites = [
      game,
      game,
      game,
      game,
      game
    ];
  }
}
