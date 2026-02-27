import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Menu } from "../shared/menu/menu";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../shared/form-utilidades';
import { CrearcursoDTO } from './cursosDTO';

@Component({
  selector: 'app-cursos',
  imports: [Menu,ReactiveFormsModule, MatInputModule, MatFormFieldModule,],
  templateUrl: './cursos.html',
})
export class Cursos {
   private fb = inject(FormBuilder)
  formutilidades =FormUtilidades
  @Output() postcurso = new EventEmitter<CrearcursoDTO>()
  form = this.fb.group({
    curso:['',{validators:[Validators.required,Validators.minLength(4)]}]
  })
  guadarCurso(){
    const curso = this.form.value as CrearcursoDTO
    this.postcurso.emit(curso)
  }
}
