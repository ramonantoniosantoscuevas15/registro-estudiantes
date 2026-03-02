import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Estudiantes } from './estudiantes/estudiantes';
import { Cursos } from './cursos/cursos';
import { Menu } from './shared/menu/menu';
import { Formulariocursos } from './cursos/formulariocursos/formulariocursos';
import { EditarEstudiante } from './estudiantes/editar-estudiante/editar-estudiante';

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
    path:'estidiante/editar/:id',
    component:EditarEstudiante
  },
  {
    path:'estudiantes/cursos',
    component:Formulariocursos
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
