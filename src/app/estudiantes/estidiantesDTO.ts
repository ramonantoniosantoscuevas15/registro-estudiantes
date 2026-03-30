import { cursosDTO } from '../cursos/cursosDTO';

export interface estudianteDTO {
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
  curso:cursosDTO[]

}

export interface CrearestudianteDTO {
  nombre: string,
  apellido: string,
  nombrepadre: string,
  nombremadre: string,
  tutor: string,
  telefono: number,
  direccion: string,
  foto?:File,
  actanacimiento?: File,
  cursoId?:number[]


}

export interface CursoEstudiantedto{
  cursos:cursosDTO[]
}

export interface EstudiantePutgetdto{
  estudiante: estudianteDTO[],
  cursoSeleccionado: cursosDTO[]
  cursoNoSeleccionado: cursosDTO[]
}
