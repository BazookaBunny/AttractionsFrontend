import { Routes } from '@angular/router';

export const routes: Routes = [
  // login rămâne separat (în afara shell-ului Navigate)
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.Login)
  },

  // shell cu meniu (Navigate) și copii
  {
    path: '',
    loadComponent: () => import('./navigate/navigate.component').then(m => m.Navigate),
    children: [
      // redirect root → dashboard
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

      {
        path: 'dashboard',
        canActivate: [() => import('./guards/auth.guard').then(m => m.authGuard)],
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.Dashboard)
      },
      {
        path: 'add',
        canActivate: [() => import('./guards/auth.guard').then(m => m.authGuard)],
        loadComponent: () => import('./add/add.component').then(m => m.Add)
      },
      {
        path: 'map',
        loadComponent: () => import('./map/map.component').then(m => m.Map)
      },
      {
        path: 'navbar',
        loadComponent: () => import('./navbar/navbar.component').then(m => m.Navbar)
      }
    ]
  },

  // fallback: orice altă rută necunoscută duce la dashboard
  { path: '**', redirectTo: 'dashboard' }
];
