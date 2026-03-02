import {  Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../shared/form-utilidades';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Menu } from "../shared/menu/menu";
import { MatSelectModule } from '@angular/material/select';
import { InputImg } from "../shared/input-img/input-img";
import { InputImg2 } from "../shared/input-img2/input-img2";
import { CrearestudianteDTO, estidiantesDTO } from './estidiantesDTO';


@Component({
  selector: 'app-estudiantes',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, Menu, MatSelectModule, InputImg, InputImg2],
  templateUrl: './estudiantes.html',

})
export class Estudiantes implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }

  }
  private fb = inject(FormBuilder)
  formutilidades =FormUtilidades
  @Input() modelo?:estidiantesDTO
  @Output() postestudiante = new EventEmitter<CrearestudianteDTO>()
  form = this.fb.group({
    nombre:['',{validators:[Validators.required,Validators.minLength(4)]}],
    apellido:['',{validators:[Validators.required,Validators.minLength(4)]}],
    nombrepadre:[''],
    nombremadre:[''],
    tutor:[''],
    telefono:[0,[Validators.required,Validators.min(3)]],
    dirrecion:['',{validators:[Validators.required,Validators.minLength(4)]}],
    foto:new FormControl<File  |string | null>(null),
    actanacimiento:new FormControl<File  |string | null>(null)


  })
  archivoSeleccionado(file:File){
    this.form.controls.foto.setValue(file)
  }
  archivoSeleccionado2(file:File){
    this.form.controls.actanacimiento.setValue(file)
  }

  guardarestudiante(){
    const estudiante = this.form.value as CrearestudianteDTO
    this.postestudiante.emit(estudiante)
  }


}
