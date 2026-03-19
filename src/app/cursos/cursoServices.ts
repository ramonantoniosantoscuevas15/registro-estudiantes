import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CrearcursoDTO } from './cursosDTO';

@Injectable({
  providedIn: 'root'
})
export class CursoServices {
  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/cursos'

  public crear(curso:CrearcursoDTO){
    return this.http.post(this.urlbase,curso)

  }

}
