import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/homepage/homepage.component').then(
        (m) => m.HomepageComponent,
      ),
  },
];
