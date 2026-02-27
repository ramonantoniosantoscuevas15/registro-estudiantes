import {  Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../shared/form-utilidades';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Menu } from "../shared/menu/menu";
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-estudiantes',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, Menu, MatSelectModule],
  templateUrl: './estudiantes.html',

})
export class Estudiantes {
  private fb = inject(FormBuilder)
  formutilidades =FormUtilidades
  form = this.fb.group({
    nombre:['',{validators:[Validators.required,Validators.minLength(4)]}],
    apellido:['',{validators:[Validators.required,Validators.minLength(4)]}],
    nombrepadre:[''],
    nombremadre:[''],
    tutor:[''],
    telefono:[0,[Validators.required,Validators.min(1)]],
    dirrecion:['',{validators:[Validators.required,Validators.minLength(4)]}],
    foto:new FormControl<File | null>(null),
    actanacimiento:new FormControl<File | null>(null)


  })

}
