import { cursosDTO } from "../cursos/cursosDTO";

export interface estidianteDTO {
  id: number,
  nombre: string,
  apellido: string,
  nombrepadre?: string,
  nombremadre?: string,
  tutor?: string,
  telefono: number,
  dirrecion: string,
  foto?:string,
  actanacimiento?: string,
  
}

export interface CrearestudianteDTO {
  nombre: string,
  apellido: string,
  nombrepadre: string,
  nombremadre: string,
  tutor: string,
  telefono: number,
  dirrecion: string,
  foto?:File,
  actanacimiento?: File,


}
