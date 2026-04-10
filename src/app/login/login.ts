import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormUtilidades } from '../shared/form-utilidades';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Seguridad } from '../security/seguridad';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule,MatInputModule, MatFormFieldModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  seguridadservices = inject(Seguridad)
  @Input()rol?:string
  estaautorizado():boolean{
    if(this.rol){
      return this.seguridadservices.obtenerRol() === this.rol
    }else{
       return this.seguridadservices.estaslogueado()

    }

  }


  formutilidades =FormUtilidades

 private fb = inject(FormBuilder)

 form = this.fb.group({
  Email:['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
  Password:['',{validators:[Validators.required,Validators.minLength(4)]}]
 })
}
