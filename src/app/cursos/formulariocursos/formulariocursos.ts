import { Component } from '@angular/core';
import { Cursos } from "../cursos";
import { CrearcursoDTO } from '../cursosDTO';
import { SelectorDTO } from '../../shared/selector/selectormodelo';

@Component({
  selector: 'app-formulariocursos',
  imports: [Cursos],
  templateUrl: './formulariocursos.html',
})
export class Formulariocursos {
  estudiantesSelecionados: SelectorDTO[]=[]
  estudiantesNoSelecionados:SelectorDTO[]=[
    {id:1,nombre:'Ronny',apellido:'Sanchez'},
    {id:2,nombre:'Luis',apellido:'pimenter'}
  ]
  guadarCurso( curso: CrearcursoDTO){
    console.log(curso)

  }
}
