import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FiltroCurso } from './filtro-curso';
import { Location } from '@angular/common';
import { Menu } from "../../shared/menu/menu";
import { Listado } from "../../shared/listado/listado";
import { ListadoCursos } from "../listado-cursos/listado-cursos";

@Component({
  selector: 'app-filtro-cursos',
  imports: [ReactiveFormsModule, Menu,  ListadoCursos],
  templateUrl: './filtro-cursos.html',
})
export class FiltroCursos implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl()
    this.buscarCurso(this.form.value as FiltroCurso)
    this.form.valueChanges.subscribe(valores =>{
      this.cursos= this.cursooriginal
      this.buscarCurso(valores as FiltroCurso)
      this.escribirParametrosBusquedaEnUrl(valores as FiltroCurso)
    })
  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  escribirParametrosBusquedaEnUrl(valores:FiltroCurso){
    let queryString=[]
    if(valores.curso){
      queryString.push(`curso=${encodeURI(valores.curso) }`)
    }
    if(valores.estudianteid!==0){
      queryString.push(`estudianteid=${valores.estudianteid}`)
    }
    this.location.replaceState('estudiantes/estudiantes/filtro',queryString.join('&'))

  }

  limpiar(){
    this.form.patchValue({curso:'',estudianteid:0})
  }

  buscarCurso(valores:FiltroCurso){
    if(valores.curso){
      this.cursos= this.cursos.filter(curso=>curso.nombre.indexOf(valores.curso)!==-1)
    }
    if(valores.estudianteid!==0){
      this.cursos= this.cursos.filter(curso=> curso.estudiantes.indexOf(valores.estudianteid)!==-1)

    }
  }

  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      var objecto:any={}
      if(params.curso){
        objecto.curso = params.curso
      }
      if(params.esdianteid){
        objecto.estudianteid = Number(params.estudianteid)
      }
      this.form.patchValue(objecto)
    })
  }

  form = this.fb.group({
    curso:'',
    estudianteid:0
  })

  estudiantes=[
    {id:1,nombre:'Ronny',apellido:'Sanchez'},
    {id:2,nombre:'Luis',apellido:'pimenter'},
    {id:3,nombre:'talia',apellido:'alcantara'}
  ]

  cursooriginal=[
    {nombre:"primero",estudiantes:[1]},
    {nombre:"segundo",estudiantes:[1,2]},
    {nombre:"tercero",estudiantes:[1,2,3]}
  ]
  cursos=this.cursooriginal
}
