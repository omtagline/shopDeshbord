import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet-frm',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './templet-frm.component.html',
  styleUrl: './templet-frm.component.scss',
})
export class TempletFrmComponent {
lastNmae: any;
  studentFormSubmit(data: NgForm) {
    console.log('data :>> ', data.value);
    console.log('valid :>> ', data.valid);
    console.log('errors :>> ', data.errors);
  }
  name: any;
  Rollno: any;
  date: any;
  email: any;
  studentId: any;
  paperTitle: any;
  description: any;
  file: any;
}
