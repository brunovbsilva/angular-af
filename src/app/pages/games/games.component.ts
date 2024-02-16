import { Component } from '@angular/core';
import { IGameCard } from './game-card/interfaces/game-card.interface';
import { AcceptButton, JoinButton, RejectButton } from './game-card/models/game-card-button';
import { GameListComponent } from './game-list/game-list.component';
import { Router } from '@angular/router';
import { GameCard } from './game-card/models/game-card';

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

  constructor(private router: Router) {
    const invite = {
      id: 'aaaa-bbbb-cccc-dddd',
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
    const game = {
      id: 'aaaa-bbbb-cccc-dddd',
      name: 'Custom game',
      imageUrl: 'https://i.ibb.co/4KRxxvv/image.png',
      location: 'Campinas, SP',
      dateFrom: new Date().getTime(),
      dateTo: new Date().getTime(),
      buttons: [
        new JoinButton('Join'),
      ]
    };
    this.invites = [
      new GameCard(invite as IGameCard),
      new GameCard(invite as IGameCard),
      new GameCard(invite as IGameCard),
      new GameCard(invite as IGameCard),
      new GameCard(invite as IGameCard)
    ];
    this.games = [
      new GameCard(game as IGameCard),
      new GameCard(game as IGameCard),
      new GameCard(game as IGameCard),
      new GameCard(game as IGameCard),
      new GameCard(game as IGameCard)
    ];
  }

  goToSeeAll(type: string) {
    this.router.navigate(['see-all', type]);
  }
}
