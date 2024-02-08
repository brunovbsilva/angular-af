import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GamesComponent } from './pages/games/games.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    { path: 'games', loadComponent: () => GamesComponent },
  ]}
];
