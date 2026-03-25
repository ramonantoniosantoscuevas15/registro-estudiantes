import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Menu } from "../shared/menu/menu";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../shared/form-utilidades';
import { CrearcursoDTO, cursosDTO } from './cursosDTO';
import { SelectorDTO } from '../shared/selector/selectormodelo';
import { Selector } from "../shared/selector/selector";

@Component({
  selector: 'app-cursos',
  imports: [ ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './cursos.html',
})
export class Cursos implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

   private fb = inject(FormBuilder)
   @Input() modelo?: cursosDTO
  formutilidades =FormUtilidades
  @Output() postcurso = new EventEmitter<CrearcursoDTO>()
  form = this.fb.group({
    nombreCurso:['',{validators:[Validators.required,Validators.minLength(4)]}]
  })
  guadarCurso(){
    const curso = this.form.value as CrearcursoDTO

    this.postcurso.emit(curso)
  }
}
