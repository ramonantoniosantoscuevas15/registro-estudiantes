import { Component, inject, Input } from '@angular/core';
import { Listado } from "../../shared/listado/listado";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EstudiantesServices } from '../estudiantesServices';
import { estudianteDTO } from '../estidiantesDTO';
import { paginaciondto } from '../../../models/paginaciondto';
import { HttpResponse } from '@angular/common/http';
import { MatTable, MatHeaderRowDef, MatHeaderCellDef, MatCellDef, MatRowDef, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { JsonPipe } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-listado-estudiantes',
  imports: [Listado, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule,JsonPipe,SweetAlert2Module],
  templateUrl: './listado-estudiantes.html',
})
export class ListadoEstudiantes {

  private estudianteservices = inject(EstudiantesServices)
  estudiantes!:estudianteDTO[]
  columnasAMostrar = ['Id','Nombre','Apellido','NombrePadre','NombreMadre','NombreTutor','Telefono', 'Direccion',
    'Foto','ActaNacimiento','Cursos','Acciones'
  ]
  paginacion:paginaciondto={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number

  constructor(){
    this.Cagarregistros()
  }

  Cagarregistros(){
    this.estudianteservices.obtenertodos(this.paginacion).subscribe((respuesta:HttpResponse<estudianteDTO[]>)=>{
      this.estudiantes = respuesta.body as estudianteDTO[]
      const cabecera = respuesta.headers.get("cantidadTotalRegistros") as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)
    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cagarregistros()
  }

  borrar(id:number){
    this.estudianteservices.borrar(id).subscribe(()=>{
      this.paginacion = {pagina:1,recordsPorPagina:5}
      this.Cagarregistros()
    })
  }
}
