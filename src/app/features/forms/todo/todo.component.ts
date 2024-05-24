import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoForm!: FormGroup;
  completedArray!: FormArray;
  pendingArray!: FormArray;

  constructor() {
    this.todoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      workingHour: ['', [Validators.required]],
      projectName: ['', [Validators.required]],
      completedTask: this.formBuilder.array([['', Validators.required]]),
      pendingTask: this.formBuilder.array([['', Validators.required]]),
    });

    this.completedArray = this.todoForm.get('completedTask') as FormArray;
    this.pendingArray = this.todoForm.get('pendingTask') as FormArray;
    // this.completedArray.push(['', [Validators.required]]);
    // this.pendingArray.push(['', [Validators.required]]);
  }
  formChange() {
    console.log(this.todoForm.value);
  }

  delete(index: number, flag: string) {
    let array = this.completedArray;
    if (flag == 'p') {
      array = this.pendingArray;
    }
    array.removeAt(index);
  }
  add(flag: string) {
    let array = this.completedArray;
    if (flag == 'p') {
      array = this.pendingArray;
    }
    array?.push(this.formBuilder.control('', [Validators.required]));
  }
  private formBuilder = inject(FormBuilder);

  getCompletedTsk() {
    return this.completedArray as FormArray;
  }
  getPendingTask() {
    return this.pendingArray as FormArray;
  }

  copy(ele: HTMLDivElement) {
    console.log(ele.innerHTML);
  }

  contentRender(name: string, text: string): string {
    return this.todoForm.get(name)?.value
      ? text + this.todoForm.get(name)?.value
      : '';
  }
}
