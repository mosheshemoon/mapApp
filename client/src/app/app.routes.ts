import { Routes } from '@angular/router';
import { LoginComponent } from './pages';
import { AuthGuardService } from './core/guards';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuardService],
  },
];
