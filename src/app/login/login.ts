import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormUtilidades } from '../shared/form-utilidades';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formutilidades =FormUtilidades
 private fb = inject(FormBuilder)

 form = this.fb.group({
  usuario:['',{validators:[Validators.required,Validators.minLength(4)]}],
  password:['',{validators:[Validators.required,Validators.minLength(4)]}]
 })
}
