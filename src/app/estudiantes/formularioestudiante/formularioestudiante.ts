import { Component, inject } from '@angular/core';
import { Estudiantes } from "../estudiantes";
import { CrearestudianteDTO } from '../estidiantesDTO';
import { SelectorDTO } from '../../shared/selector/selectormodelo';
import { EstudiantesServices } from '../estudiantesServices';

@Component({
  selector: 'app-formularioestudiante',
  imports: [Estudiantes],
  templateUrl: './formularioestudiante.html',
})
export class Formularioestudiante {
  estudianteServices = inject(EstudiantesServices)

   guardarestudiante(estudiante: CrearestudianteDTO){
    console.log(estudiante)

    // this.estudianteServices.crear(estudiante).subscribe(()=>{
    //   console.log(estudiante)
    // })


   }
 }
