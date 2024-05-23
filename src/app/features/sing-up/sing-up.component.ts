import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss',
})
export class SingUpComponent {
  singup() {
    console.error(this.singUpForm);
  }
  singUpForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.singUpForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required]],
      address: this.formbuilder.group({
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
      }),
    });
  }
}
