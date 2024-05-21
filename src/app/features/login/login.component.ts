import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required]],
    });
  }
  // Email = new FormControl('', [Validators.email, Validators.required]);
  // pswd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  // username = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(4),
  // ]);
  // loginForm = new FormGroup([this.Email, this.pswd, this.username]);

  login() {
    console.log('this.loginForm.value :>> ', this.loginForm.value);
  }
}
