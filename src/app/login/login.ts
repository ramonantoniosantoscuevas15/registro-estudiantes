import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 private fb = inject(FormBuilder)

 form = this.fb.group({
  usuario:[''],
  password:['']
 })
}
