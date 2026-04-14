import { Component, inject, Input } from '@angular/core';
import { Seguridad } from '../security/seguridad';

@Component({
  selector: 'app-autorizado',
  imports: [],
  templateUrl: './autorizado.html',
})
export class Autorizado {
  seguridad = inject(Seguridad)
  @Input() rol?:string

  estaautorizado():boolean{
    if(this.rol){
     return this.seguridad.obtenerRol() === this.rol
    }else{
      return this.seguridad.estaslogueado()
    }
  }
}
