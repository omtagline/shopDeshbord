import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let auth = inject(AuthService);
  let isAuth = auth.checkAuth();
  console.log(isAuth());

  if (isAuth() == false) {
    _router.navigate(['login']);
    return false;
  } else {
    console.warn('login');
    return true;
  }
};
