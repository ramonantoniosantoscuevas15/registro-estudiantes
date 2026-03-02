import { Component } from '@angular/core';
import { Estudiantes } from "../estudiantes";
import { CrearestudianteDTO } from '../estidiantesDTO';

@Component({
  selector: 'app-formularioestudiante',
  imports: [Estudiantes],
  templateUrl: './formularioestudiante.html',
})
export class Formularioestudiante {
   guardarestudiante(estudiante: CrearestudianteDTO){
    console.log(estudiante)

   }
 }
