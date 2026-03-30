import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CrearestudianteDTO, CursoEstudiantedto, estudianteDTO } from './estidiantesDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServices {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/estudiantes'

  public crear(estudiante:CrearestudianteDTO):Observable<estudianteDTO>{
    const formData = this.contruirFormdata(estudiante)
    return this.http.post<estudianteDTO>(this.urlbase,formData)

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
    formData.append('cursoId',JSON.stringify(estudiante.cursoId))

    return formData


  }
  public crearget():Observable<CursoEstudiantedto>{
    return this.http.get<CursoEstudiantedto>(`${this.urlbase}/PostCurso`)
  }

}
