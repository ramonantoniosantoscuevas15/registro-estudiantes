import { Component, inject } from '@angular/core';
import { Seguridad } from '../../security/seguridad';
import { Router } from '@angular/router';
import { CredencialesUsuarioDTO } from '../../security/seguridaddto';
import { extraerErroresIdentity } from '../../shared/extraererrores';

@Component({
  selector: 'app-formulario-registro',
  imports: [],
  templateUrl: './formulario-registro.html',
})
export class FormularioRegistro {
   seguridadservice = inject(Seguridad)
  router = inject(Router)
  errores:string[]=[]

  guardarlogin(credenciales:CredencialesUsuarioDTO){
    this.seguridadservice.registrar(credenciales).subscribe({
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
