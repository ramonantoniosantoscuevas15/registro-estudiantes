import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Estudiantes } from './estudiantes/estudiantes';
import { Cursos } from './cursos/cursos';
import { Menu } from './shared/menu/menu';
import { Formulariocursos } from './cursos/formulariocursos/formulariocursos';

import { FiltroCursos } from './cursos/filtro-cursos/filtro-cursos';
import { ListadoCursos } from './cursos/listado-cursos/listado-cursos';
import { FiltroEstudiantes } from './estudiantes/filtro-estudiantes/filtro-estudiantes';
import { ListadoEstudiantes } from './estudiantes/listado-estudiantes/listado-estudiantes';
import { Formularioestudiante } from './estudiantes/formularioestudiante/formularioestudiante';
import { EditarCurso } from './cursos/editar-curso/editar-curso';
import { Editarestudiante } from './estudiantes/editarestudiante/editarestudiante';
import { esAdminGuard } from './shared/guard/es-admin-guard';
import { FormularioLogin } from './login/formulario-login/formulario-login';

export const routes: Routes = [

  {
    path:'',
    component:Formularioestudiante,
    canActivate:[esAdminGuard]
  },

  {
    path:'estudiantes/filtro',
    component:FiltroEstudiantes,
    canActivate:[esAdminGuard]
  },
  {
    path:'listadoestudiantes',
    component:ListadoEstudiantes,
    canActivate:[esAdminGuard]
  },
  {
    path:'cursos',
    component:Formulariocursos,
    canActivate:[esAdminGuard]
  },
  {
    path:'listadocursos',
    component:ListadoCursos,
    canActivate:[esAdminGuard]
  },
  {
    path:'curso/editar/:id',
    component:EditarCurso,
    canActivate:[esAdminGuard]
  },
  {
    path:'estudiante/editar/:id',
    component:Editarestudiante,
    canActivate:[esAdminGuard]
  },
  {
    path:'Login',
    component:FormularioLogin
  },

  {
    path:'**',
    redirectTo:''
  }
];
