import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { SeeAllComponent } from './pages/see-all/see-all.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { SecondLayoutComponent } from './layout-2/second-layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', loadComponent: () => HomeComponent },
      { path: 'games', loadComponent: () => GamesComponent },
      { path: 'chats', loadComponent: () => ChatsComponent }
    ]
  },
  {
    path: '', component: SecondLayoutComponent, children: [
      { path: 'game/:id', loadComponent: () => GameComponent },
      { path: 'see-all/:type', loadComponent: () => SeeAllComponent }
    ]
  },
];
