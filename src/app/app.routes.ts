import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { ImageCarrousselComponent } from './pages/game/image-carroussel/image-carroussel.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'games', loadComponent: () => GamesComponent },
    ]
  },
  { path: 'game', component: GameComponent }
];
