import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CrearcursoDTO, cursosDTO } from './cursosDTO';
import { paginaciondto } from '../../models/paginaciondto';
import { Observable } from 'rxjs';
import { construirQueryParams } from '../shared/queris/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class CursoServices {
  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/cursos'

  public obtenertodos(paginacion: paginaciondto): Observable<HttpResponse<cursosDTO[]>> {
    let queyparams = construirQueryParams(paginacion)
    return this.http.get<cursosDTO[]>(this.urlbase, { params: queyparams, observe: 'response' })

  }
  public obtenerporid(id: number): Observable<cursosDTO> {
    return this.http.get<cursosDTO>(`${this.urlbase}/${id}`)


  }

  public actualizar(id: number, curso: CrearcursoDTO) {
    return this.http.put(`${this.urlbase}/${id}`, curso)
  }

  public crear(curso: CrearcursoDTO) {
    return this.http.post(this.urlbase, curso)

  }

  public obtenercursos():Observable<cursosDTO[]> {
    return this.http.get<cursosDTO[]>(`${this.urlbase}/todos`)
  }
  public borrar(id: number) {
    return this.http.delete(`${this.urlbase}/${id}`)
  }

}
