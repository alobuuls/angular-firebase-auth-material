import { Routes } from '@angular/router';

import { authGuard, publicGuard } from './core/guards';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register.component'),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component'),
      },
    ],
  },
];
