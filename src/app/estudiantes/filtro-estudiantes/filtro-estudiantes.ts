import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FiltroEstudiante } from './filtro-estudiante';
import { Listado } from "../../shared/listado/listado";
import { ListadoEstudiantes } from "../listado-estudiantes/listado-estudiantes";
import { estudianteDTO } from '../estidiantesDTO';
import { cursosDTO } from '../../cursos/cursosDTO';
import { EstudiantesServices } from '../estudiantesServices';
import { CursoServices } from '../../cursos/cursoServices';
import { paginaciondto } from '../../../models/paginaciondto';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Lista } from "../../shared/lista/lista";

@Component({
  selector: 'app-filtro-estudiantes',
  imports: [ReactiveFormsModule, Lista, MatPaginator],
  templateUrl: './filtro-estudiantes.html',
})
export class FiltroEstudiantes implements OnInit {
  estudianteservices = inject(EstudiantesServices)
  cursosservices = inject(CursoServices)
  paginacion: paginaciondto = { pagina: 1, recordsPorPagina: 5 }
  cantidadTotalRegistros!: number
  ngOnInit(): void {
    this.cursosservices.obtenercursos().subscribe(curso => {
      this.cursos = curso
      this.leerValoresUrl()
      this.buscarEstutiante(this.form.value as FiltroEstudiante)
      this.form.valueChanges.subscribe(valores => {
        this.buscarEstutiante(valores as FiltroEstudiante)
        this.escribirParametrosBusquedaEnUrl(valores as FiltroEstudiante)
      })

    })

  }
  escribirParametrosBusquedaEnUrl(valores: FiltroEstudiante) {
    let queryString = []
    if (valores.nombre) {
      queryString.push(`nombre=${encodeURI(valores.nombre)}`)
    }
    if (valores.cursoid !== 0) {
      queryString.push(`cursoid=${valores.cursoid}`)

    }
    this.location.replaceState('estudiantes/filtro', queryString.join('&'))
  }
  limpiar() {
    this.form.patchValue({ nombre: '', cursoid: 0 })
  }
  buscarEstutiante(valores: FiltroEstudiante) {
    valores.pagina = this.paginacion.pagina
    valores.recordsPorPagina = this.paginacion.recordsPorPagina
    this.estudianteservices.buscar(valores).subscribe(respuesta => {
      this.estudiantes = respuesta.body as estudianteDTO[]
      const cabecera = respuesta.headers.get('cantidadTotalRegistros') as string
      this.cantidadTotalRegistros = parseInt(cabecera, 10)
    })
  }
  leerValoresUrl() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {}
      if (params.nombre) {
        objeto.nombre = params.nombre
      }
      if (params.cursoid) {
        objeto.cursoid = Number(params.cursoid)

      }
      this.form.patchValue(objeto)
    })
  }
  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = { pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize }


  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.fb.group({
    nombre: '',
    cursoid: 0

  })

  cursos!: cursosDTO[]

  estudiantes!: estudianteDTO[]

}
