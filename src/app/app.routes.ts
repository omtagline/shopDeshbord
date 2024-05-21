import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SingUpComponent } from './features/sing-up/sing-up.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singup',
    component: SingUpComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
