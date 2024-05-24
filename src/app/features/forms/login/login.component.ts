import { state } from '@angular/animations';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  auth = inject(AuthService);
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  // Email = new FormControl('', [Validators.email, Validators.required]);
  // pswd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  // username = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(4),
  // ]);
  // loginForm = new FormGroup([this.Email, this.pswd, this.username]);

  login(e: Event) {
    let values = this.loginForm.value;
    this.auth.login(values.email, values.pswd);
  }
}
