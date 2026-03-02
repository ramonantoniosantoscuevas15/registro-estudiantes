import { cursosDTO } from "../cursos/cursosDTO";

export interface estidiantesDTO {
  id: number,
  nombre: string,
  apellido: string,
  nombrepadre: string,
  nombremadre: string,
  tutor: string,
  telefono: number,
  dirrecion: string,
  foto?:string,
  actanacimiento?: string,
  // cursos: cursosDTO[]
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
  // cursosId:number[]

}
