import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Estudiantes } from './estudiantes/estudiantes';
import { Cursos } from './cursos/cursos';

export const routes: Routes = [
  {
    path:'',
    component:Login
  },
  {
    path:'estudiantes',
    loadChildren:() => import('././estudiantes/estudiantes.routes')
  },
  {
    path:'cursos',
    component:Cursos
  },
  {
    path:'**',
    redirectTo:''
  }
];
