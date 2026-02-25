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
  actanacimiento?: string,
  cursos: cursosDTO[]
}

export interface CrearestudianteDTO {
  nombre: string,
  apellido: string,
  nombrepadre: string,
  nombremadre: string,
  tutor: string,
  telefono: number,
  dirrecion: string,
  actanacimiento?: File,
  cursosId:number[]

}
