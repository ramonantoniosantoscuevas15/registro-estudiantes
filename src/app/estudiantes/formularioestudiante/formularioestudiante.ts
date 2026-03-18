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
  cursonoseleccionado:SelectorDTO[]=[
    {id:1,cursonombre:'primero'},
    {id:2,cursonombre:'segundo'}
  ]
  cursoseleccionado:SelectorDTO[]=[]

   guardarestudiante(estudiante: CrearestudianteDTO){


    //  this.estudianteServices.crear(estudiante).subscribe(()=>{
    //    console.log(estudiante)
    //  })


   }
 }
