import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments.developer';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from './seguridaddto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Seguridad {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/usuarios'
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'token-expiracion'

  registrar(credenciales: CredencialesUsuarioDTO):Observable<RespuestaAutenticacionDTO>{
    return this.http.post<RespuestaAutenticacionDTO>(`${this.urlbase}/registrar`,credenciales)
    .pipe(
      tap(respuestaAutenticacion => this.guardartoken(respuestaAutenticacion))
    )
  }

  login(credenciales: CredencialesUsuarioDTO):Observable<RespuestaAutenticacionDTO>{
    return this.http.post<RespuestaAutenticacionDTO>(`${this.urlbase}/login`,credenciales)
    .pipe(
      tap(respuestaAutenticacion => this.guardartoken(respuestaAutenticacion))
    )
  }

  guardartoken(respuestaAutenticacion:RespuestaAutenticacionDTO){
    localStorage.setItem(this.llaveToken,respuestaAutenticacion.token)
    localStorage.setItem(this.llaveExpiracion,respuestaAutenticacion.expiracion.toString())

  }

  estaslogueado():boolean{
    const token = localStorage.getItem(this.llaveToken)
    if(!token){
      return false
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion)!
    const expiracionFecha = new Date(expiracion)

    if(expiracionFecha <= new Date()){
      this.logout()
      return false

    }
    return true

  }
  logout(){
    localStorage.removeItem(this.llaveToken)
    localStorage.removeItem(this.llaveExpiracion)
  }
  obtenerRol():string{
    return''
  }

  noestaslogueado():boolean{
    return false
  }

}
