import {  Routes } from "@angular/router";
import { Estudiantes } from "./estudiantes";
import { Formularioestudiante } from "./formularioestudiante/formularioestudiante";
import { EditarEstudiante } from "./editar-estudiante/editar-estudiante";

export const estudiantesroutes: Routes=[
  {
    path:'',
    component:Formularioestudiante
  },
  


]
export default estudiantesroutes
