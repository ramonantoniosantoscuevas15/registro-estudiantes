import { Component, Input } from '@angular/core';
import { Listado } from "../../shared/listado/listado";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-estudiantes',
  imports: [Listado, MatButtonModule,RouterLink],
  templateUrl: './listado-estudiantes.html',
})
export class ListadoEstudiantes {
  @Input({required:true}) estudiantes!:any[]
}
