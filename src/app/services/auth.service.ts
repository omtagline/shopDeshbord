import { Injectable, Signal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  isAuth = signal(true);
  constructor() {}
  login(email: string, pswd: string) {
    if (email == 'admin@gmail.com' && pswd == 'admin@123') {
      this.isAuth.set(true);

      this.router.navigate(['']);
      return this.isAuth;
    } else {
      this.isAuth.set(false);
      alert('usernmae and Password incorrect');
      return this.isAuth;
    }
  }
  checkAuth() {
    return this.isAuth;
  }
  logout() {
    this.isAuth.set(false);
  }
}
