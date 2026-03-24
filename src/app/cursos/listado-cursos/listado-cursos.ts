import { Component, Input } from '@angular/core';
import { Listado } from "../../shared/listado/listado";
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listado-cursos',
  imports: [Listado,MatButtonModule, MatTableModule, MatPaginatorModule,],
  templateUrl: './listado-cursos.html',
})
export class ListadoCursos {
   @Input({required:true}) cursos!:any[]





}
