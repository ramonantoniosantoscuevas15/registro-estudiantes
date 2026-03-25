import { Component, inject } from '@angular/core';
import { Cursos } from "../cursos";
import { CrearcursoDTO } from '../cursosDTO';
import { SelectorDTO } from '../../shared/selector/selectormodelo';
import { CursoServices } from '../cursoServices';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariocursos',
  imports: [Cursos],
  templateUrl: './formulariocursos.html',
})
export class Formulariocursos {
  cursoServices = inject(CursoServices)
  private route = inject(Router)

  guadarCurso( curso: CrearcursoDTO){
    this.cursoServices.crear(curso).subscribe({
      next:curso =>{
        Swal.fire({
          title:"Curso Agregado Correctamente",
          icon:"success",
          draggable:true
        })
        this.route.navigate(['/listadocursos'])


      },


    })





  }
}
