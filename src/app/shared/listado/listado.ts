import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
})
export class Listado {
  @Input({required:true}) listado:any
 }
