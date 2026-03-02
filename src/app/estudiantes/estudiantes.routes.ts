import {  Routes } from "@angular/router";
import { Estudiantes } from "./estudiantes";
import { Formularioestudiante } from "./formularioestudiante/formularioestudiante";

export const estudiantesroutes: Routes=[
  {
    path:'',
    component:Formularioestudiante
  }


]
export default estudiantesroutes
