import { Component } from '@angular/core';
import { Cursos } from "../cursos";
import { CrearcursoDTO } from '../cursosDTO';

@Component({
  selector: 'app-formulariocursos',
  imports: [Cursos],
  templateUrl: './formulariocursos.html',
})
export class Formulariocursos {
  guadarCurso( curso: CrearcursoDTO){
    console.log(curso)

  }
}
