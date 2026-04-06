import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CrearestudianteDTO, CursoEstudiantedto, estudianteDTO, EstudiantePutgetdto } from './estidiantesDTO';
import { Observable } from 'rxjs';
import { paginaciondto } from '../../models/paginaciondto';
import { construirQueryParams } from '../shared/queris/construirQueryParams';

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
    formData.append('tutor',estudiante.nombretutor)
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

  public obtenerestudiante():Observable<estudianteDTO[]>{
    return this.http.get<estudianteDTO[]>(`${this.urlbase}/todos`)

  }

  public obtenertodos(paginacion: paginaciondto):Observable<HttpResponse<estudianteDTO[]>>{
    let queryparams = construirQueryParams(paginacion)
    return this.http.get<estudianteDTO[]>(this.urlbase,{params:queryparams,observe:'response'})
  }

  public editar(id:number,estudiante:CrearestudianteDTO){
    const formData = this.contruirFormdata(estudiante)
    return this.http.put(`${this.urlbase}/${id}`,formData)
  }

  public actualizarGet(id:number):Observable<EstudiantePutgetdto>{
    return this.http.get<EstudiantePutgetdto>(`${this.urlbase}/Putget/${id}`)
  }
   public borrar(id: number) {
    return this.http.delete(`${this.urlbase}/${id}`)
  }

  public buscar(valores:any):Observable<HttpResponse<estudianteDTO[]>>{
    const params = new HttpParams({fromObject:valores})
    return this.http.get<estudianteDTO[]>(`${this.urlbase}/buscar`,{params,observe:'response'})

  }

}
