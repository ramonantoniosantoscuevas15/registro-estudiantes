import { Component, inject } from '@angular/core';
import { Estudiantes } from "../estudiantes";
import { CrearestudianteDTO } from '../estidiantesDTO';
import { SelectorDTO } from '../../shared/selector/selectormodelo';
import { EstudiantesServices } from '../estudiantesServices';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Cargando } from "../../shared/cargando/cargando";

@Component({
  selector: 'app-formularioestudiante',
  imports: [Estudiantes, Cargando],
  templateUrl: './formularioestudiante.html',
})
export class Formularioestudiante {
  estudianteServices = inject(EstudiantesServices)
  cursonoseleccionado:SelectorDTO[]=[]
  cursoseleccionado:SelectorDTO[]=[]
  router = inject(Router)

  constructor() {
    this.estudianteServices.crearget().subscribe(modelo => {
     this.cursonoseleccionado = modelo.cursos.map(curso => {
        return <SelectorDTO>{ id: curso.id, nombrecurso: curso.nombreCurso }
      })
    })
  }

   guardarestudiante(estudiante: CrearestudianteDTO){


     this.estudianteServices.crear(estudiante).subscribe({
      next:estudiante=>{
        Swal.fire({
          title:"Estudiante Agregado Correctamente",
          icon:"success",
          draggable:true
        })
      }
     })
     this.router.navigate(['/listadoestudiantes'])


   }
 }
