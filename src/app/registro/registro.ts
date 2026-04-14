import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredencialesUsuarioDTO } from '../security/seguridaddto';
import { FormUtilidades } from '../shared/form-utilidades';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, FormsModule,MatInputModule, MatFormFieldModule,],
  templateUrl: './registro.html',
})
export class Registro {
  @Output() postregistro = new EventEmitter<CredencialesUsuarioDTO>


  formutilidades =FormUtilidades

 private fb = inject(FormBuilder)

 form = this.fb.group({
  Email:['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
  Password:['',{validators:[Validators.required,Validators.minLength(4)]}]
 })

 guardarregistro(){
  const registro = this.form.value as CredencialesUsuarioDTO
  this.postregistro.emit(registro)
 }
 }


