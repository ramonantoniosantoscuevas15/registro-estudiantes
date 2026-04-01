import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { SelectorDTO } from '../../shared/selector/selectormodelo';
import { CrearestudianteDTO, estudianteDTO } from '../estidiantesDTO';
import { EstudiantesServices } from '../estudiantesServices';
import { Router } from '@angular/router';
import { Estudiantes } from "../estudiantes";
import { Cargando } from "../../shared/cargando/cargando";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarestudiante',
  imports: [Estudiantes, Cargando],
  templateUrl: './editarestudiante.html',
})
export class Editarestudiante implements OnInit {
  ngOnInit(): void {
    this.estudianteservices.actualizarGet(this.id).subscribe(modelo=>{
      this.estudiante = modelo.estudiante
      this.cursoseleccionado=modelo.cursoSeleccionado
      this.cursonoseleccionado=modelo.cursoNoSeleccionado.map(curso=>{
        return <SelectorDTO>{id:curso.id,nombreCurso:curso.nombreCurso}
      })
    })
  }
  @Input({ transform: numberAttribute }) id!: number
  cursonoseleccionado: SelectorDTO[] = []
  cursoseleccionado: SelectorDTO[] = []
  estudiante!:estudianteDTO
  estudianteservices = inject(EstudiantesServices)
  router = inject(Router)
  guardarestudiante(estudiante: CrearestudianteDTO){
    this.estudianteservices.editar(this.id,estudiante).subscribe({
      next:()=>{
        Swal.fire({
          title:"Estudiante Actualizado Correctamente",
          icon:"success",
          draggable:true
        })

      }
    })
    this.router.navigate(['/listadoestudiantes'])

  }
}
