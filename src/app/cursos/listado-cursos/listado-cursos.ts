import { Component, inject, Input } from '@angular/core';
import { Listado } from "../../shared/listado/listado";
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CursoServices } from '../cursoServices';
import { cursosDTO } from '../cursosDTO';
import { paginaciondto } from '../../../models/paginaciondto';
import { HttpResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-listado-cursos',
  imports: [Listado, MatButtonModule, MatTableModule, MatPaginatorModule,RouterLink,SweetAlert2Module],
  templateUrl: './listado-cursos.html',
})
export class ListadoCursos {

  private cursoServices = inject(CursoServices)
  cursos!: cursosDTO[]
  columnasAMostrar = ['id', 'nombreCurso', 'Acciones']
  paginacion: paginaciondto = { pagina: 1, recordsPorPagina: 5 }
  cantidadTotalRegistros!: number

  constructor(){
    this.Cargaregistros()

  }

  Cargaregistros(){
    this.cursoServices.obtenertodos(this.paginacion).subscribe((respuesta:HttpResponse<cursosDTO[]>)=>{
      this.cursos = respuesta.body as cursosDTO[]
      const cabecera = respuesta.headers.get("cantidadTotalRegistros") as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)
    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cargaregistros()
  }

  borrar(id:number){
    this.cursoServices.borrar(id).subscribe(()=>{
      this.paginacion = {pagina:1,recordsPorPagina:5}
      this.Cargaregistros()
    })
  }






}
