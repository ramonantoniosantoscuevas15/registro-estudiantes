import { Component, Input } from '@angular/core';
import { Listado } from "../listado/listado";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [Listado,MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './lista.html',
})
export class Lista {
  @Input({required:true}) estudiantes!:any[]
}
