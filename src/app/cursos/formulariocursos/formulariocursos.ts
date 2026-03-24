import { Component, inject } from '@angular/core';
import { Cursos } from "../cursos";
import { CrearcursoDTO } from '../cursosDTO';
import { SelectorDTO } from '../../shared/selector/selectormodelo';
import { CursoServices } from '../cursoServices';

@Component({
  selector: 'app-formulariocursos',
  imports: [Cursos],
  templateUrl: './formulariocursos.html',
})
export class Formulariocursos {
  cursoServices = inject(CursoServices)

  guadarCurso( curso: CrearcursoDTO){
    this.cursoServices.crear(curso).subscribe({
      next:()=>{
        console.log(curso)

      },
      

    })





  }
}
