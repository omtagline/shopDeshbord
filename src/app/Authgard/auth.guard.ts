import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let isAuth: string | null = localStorage.getItem('isAuth');
  console.log('token =>', isAuth);
  if (isAuth == null) {
    _router.navigate(['login']);
    return false;
  } else {
    console.warn('login');
    return true;
  }
};
