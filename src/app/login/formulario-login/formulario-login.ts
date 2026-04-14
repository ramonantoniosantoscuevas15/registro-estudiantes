import { Component, inject } from '@angular/core';
import { Login } from "../login";
import { Seguridad } from '../../security/seguridad';
import { Router } from '@angular/router';
import { CredencialesUsuarioDTO } from '../../security/seguridaddto';
import { extraerErroresIdentity } from '../../shared/extraererrores';

@Component({
  selector: 'app-formulario-login',
  imports: [Login],
  templateUrl: './formulario-login.html',
})
export class FormularioLogin {
  seguridadservice = inject(Seguridad)
  router = inject(Router)
  errores:string[]=[]

  guardarlogin(credenciales:CredencialesUsuarioDTO){
    this.seguridadservice.login(credenciales).subscribe({
      next:()=>{
        this.router.navigate(['/'])
      },
      error: err =>{
        const errores = extraerErroresIdentity(err)
        this.errores = errores
      }
    })

  }
}
