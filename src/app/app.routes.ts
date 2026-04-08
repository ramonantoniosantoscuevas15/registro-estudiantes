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

export const routes: Routes = [
  //  {
  // path:'',
  //   component:Login,
  //  },
  {
    path:'',
    component:Formularioestudiante
  },

  {
    path:'estudiantes/filtro',
    component:FiltroEstudiantes
  },
  {
    path:'listadoestudiantes',
    component:ListadoEstudiantes
  },
  {
    path:'cursos',
    component:Formulariocursos
  },
  {
    path:'listadocursos',
    component:ListadoCursos
  },
  {
    path:'curso/editar/:id',
    component:EditarCurso
  },
  {
    path:'estudiante/editar/:id',
    component:Editarestudiante
  },
  {
    path:'Login',
    component:Login
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
