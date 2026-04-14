import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormUtilidades } from '../shared/form-utilidades';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Seguridad } from '../security/seguridad';
import { CredencialesUsuarioDTO } from '../security/seguridaddto';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule,MatInputModule, MatFormFieldModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  @Output() postlogin = new EventEmitter<CredencialesUsuarioDTO>


  formutilidades =FormUtilidades

 private fb = inject(FormBuilder)

 form = this.fb.group({
  Email:['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
  Password:['',{validators:[Validators.required,Validators.minLength(4)]}]
 })

 guardarlogin(){
  const login = this.form.value as CredencialesUsuarioDTO
  this.postlogin.emit(login)
 }
}
