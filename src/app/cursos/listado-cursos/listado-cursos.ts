import { Component, Input } from '@angular/core';
import { Listado } from "../../shared/listado/listado";

@Component({
  selector: 'app-listado-cursos',
  imports: [Listado],
  templateUrl: './listado-cursos.html',
})
export class ListadoCursos {
  @Input({required:true}) cursos!:any[]
}
