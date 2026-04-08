import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Seguridad {

  constructor() { }

  estaslogueado():boolean{
    return false

  }
  obtenerRol():string{
    return'Admin'
  }

  noestaslogueado():boolean{
    return false
  }

}
