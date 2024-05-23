import { Routes } from '@angular/router';

import { authGuard } from './Authgard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((e) => e.LoginComponent),

    // canActivate: [authGuard],
  },
  {
    path: 'singup',
    loadComponent: () =>
      import('./features/sing-up/sing-up.component').then(
        (e) => e.SingUpComponent
      ),

    // canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (e) => e.ProfileComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/product-details/product-details.component').then(
        (e) => e.ProductDetailsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'addproducts/:id',

    loadComponent: () =>
      import('./features/addproducts/addproducts.component').then(
        (e) => e.AddproductsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'addproducts',
    loadComponent: () =>
      import('./features/addproducts/addproducts.component').then(
        (e) => e.AddproductsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'product',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/remove-products/remove-products.component').then(
        (e) => e.RemoveProductsComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((e) => e.HomeComponent),
    pathMatch: 'full',

    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/notfounded/notfounded.component').then(
        (e) => e.NotfoundedComponent
      ),
    canActivate: [authGuard],
  },
];
