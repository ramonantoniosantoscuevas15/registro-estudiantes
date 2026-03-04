import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Menu } from "../shared/menu/menu";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../shared/form-utilidades';
import { CrearcursoDTO } from './cursosDTO';
import { SelectorDTO } from '../shared/selector/selectormodelo';
import { Selector } from "../shared/selector/selector";

@Component({
  selector: 'app-cursos',
  imports: [Menu, ReactiveFormsModule, MatInputModule, MatFormFieldModule, Selector],
  templateUrl: './cursos.html',
})
export class Cursos {
  @Input({required:true}) estudiantesSelecionados!:SelectorDTO[]
  @Input({required:true}) estudiantesNoSelecionados!:SelectorDTO[]
   private fb = inject(FormBuilder)
  formutilidades =FormUtilidades
  @Output() postcurso = new EventEmitter<CrearcursoDTO>()
  form = this.fb.group({
    curso:['',{validators:[Validators.required,Validators.minLength(4)]}]
  })
  guadarCurso(){
    const curso = this.form.value as CrearcursoDTO
    const estudiantesId = this.estudiantesSelecionados.map(val=> val.id)
    curso.estudianteId = estudiantesId
    this.postcurso.emit(curso)
  }
}
