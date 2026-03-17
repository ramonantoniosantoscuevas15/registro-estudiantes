import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CrearestudianteDTO, estidianteDTO } from './estidiantesDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServices {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/estudiantes'

  public crear(estudiante:CrearestudianteDTO):Observable<estidianteDTO>{
    const formData = this.contruirFormdata(estudiante)
    return this.http.post<estidianteDTO>(this.urlbase,formData)

  }

  private contruirFormdata(estudiante:CrearestudianteDTO):FormData{
    const formData  = new FormData()
    formData.append('nombre',estudiante.nombre)
    formData.append('apellido',estudiante.apellido)
    formData.append('nombrepadre',estudiante.nombrepadre)
    formData.append('nombremadre',estudiante.nombremadre)
    formData.append('tutor',estudiante.tutor)
    formData.append('telefono',JSON.stringify(estudiante.telefono))
    formData.append('direccion',estudiante.direccion)
    if(estudiante.foto){
      formData.append('foto',estudiante.foto)
    }
    if(estudiante.actanacimiento){
      formData.append('actanacimiento',estudiante.actanacimiento)
    }

    return formData


  }

}
