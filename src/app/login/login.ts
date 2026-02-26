import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormUtilidades } from '../shared/form-utilidades';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink,MatInputModule, MatFormFieldModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formutilidades =FormUtilidades

 private fb = inject(FormBuilder)

 form = this.fb.group({
  correo:['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
  password:['',{validators:[Validators.required,Validators.minLength(4)]}]
 })
}
