import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CursoServices } from '../cursoServices';
import { CrearcursoDTO, cursosDTO } from '../cursosDTO';
import { Router } from '@angular/router';
import { Cursos } from "../cursos";
import { Cargando } from "../../shared/cargando/cargando";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-curso',
  imports: [Cursos, Cargando],
  templateUrl: './editar-curso.html',
})
export class EditarCurso implements OnInit {
  ngOnInit(): void {
    this.cursoServices.obtenerporid(this.id).subscribe(curso =>{
      this.cursos= curso

    })
  }
  @Input({transform: numberAttribute})
  id!:number
  cursoServices = inject(CursoServices)
  cursos?:cursosDTO
  private route = inject(Router)
  guadarCurso(curso:CrearcursoDTO){
    this.cursoServices.actualizar(this.id,curso).subscribe({
      next:()=>{
        Swal.fire({
          title:"Curso Actualizado Correctamente",
          icon:"success",
          draggable:true
        })
        this.route.navigate(['/listadocursos'])

      }
    })

  }
}
