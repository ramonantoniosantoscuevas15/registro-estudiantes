import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule],
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
