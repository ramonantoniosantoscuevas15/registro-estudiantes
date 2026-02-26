import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Estudiantes } from './estudiantes/estudiantes';
import { Cursos } from './cursos/cursos';
import { Menu } from './shared/menu/menu';

export const routes: Routes = [
  {
    path:'',
    component:Login,
  },
  {
    path:'estudiantes',
    loadChildren:() => import('././estudiantes/estudiantes.routes')
  },
  {
    path:'estudiantes/cursos',
    component:Cursos
  },
  {
    path:'menu',
    component:Menu
  },
  {
    path:'**',
    redirectTo:''
  }
];
