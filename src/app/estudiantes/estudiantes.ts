import {  Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-estudiantes',
  imports: [ReactiveFormsModule, FormsModule, ],
  templateUrl: './estudiantes.html',

})
export class Estudiantes {
  private fb = inject(FormBuilder)
  form = this.fb.group({
    nombre:['',{validators:[Validators.required,Validators.minLength(4)]}],
    apellido:['',{validators:[Validators.required,Validators.minLength(4)]}],
    nombrepadre:[''],
    nombremadre:[''],
    tutor:[''],
    telefono:[0,[Validators.required,Validators.min(1)]],


  })
}
