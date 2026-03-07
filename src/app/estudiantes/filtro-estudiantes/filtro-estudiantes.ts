import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FiltroEstudiante } from './filtro-estudiante';
import { Listado } from "../../shared/listado/listado";
import { ListadoEstudiantes } from "../listado-estudiantes/listado-estudiantes";

@Component({
  selector: 'app-filtro-estudiantes',
  imports: [ReactiveFormsModule,  ListadoEstudiantes],
  templateUrl: './filtro-estudiantes.html',
})
export class FiltroEstudiantes implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl()
    this.buscarEstutiante(this.form.value as FiltroEstudiante)
    this.form.valueChanges.subscribe(valores =>{
      this.estudiantes = this.estudiantesOriginal
      this.buscarEstutiante(valores as FiltroEstudiante)
      this.escribirParametrosBusquedaEnUrl(valores as FiltroEstudiante)
    })
  }
  escribirParametrosBusquedaEnUrl(valores:FiltroEstudiante){
    let queryString=[]
    if(valores.nombre){
      queryString.push(`nombre=${encodeURI(valores.nombre) }`)
    }
    if(valores.cursoid !==0){
      queryString.push(`cursoid=${valores.cursoid}`)

    }
    this.location.replaceState('estudiantes/filtro',queryString.join('&'))
  }
  limpiar(){
    this.form.patchValue({nombre:'',cursoid:0})
  }
  buscarEstutiante(valores:FiltroEstudiante){
    if(valores.nombre){
      this.estudiantes = this.estudiantes.filter(estudiante => estudiante.nombre.indexOf(valores.nombre)!==-1)
    }
    if(valores.cursoid !==0){
      this.estudiantes = this.estudiantes.filter(estudiante => estudiante.cursos.indexOf(valores.cursoid)!==-1)

    }
  }
  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      var objeto: any={}
      if(params.nombre){
        objeto.nombre = params.nombre
      }
      if(params.cursoid){
        objeto.cursoid= Number(params.cursoid)

      }
      this.form.patchValue(objeto)
    })
  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.fb.group({
    nombre:'',
    cursoid:0

  })

  cursos=[
    {id:1,curso:'primero'},
    {id:2,curso:'segundo'},
    {id:3,curso:'tercero'}
  ]

  estudiantesOriginal = [
    {nombre:"ramon", apellido:"santos", cursos:[1]},
    {nombre:"manuel",apellido:"Zapata",cursos:[2,3]},
    {nombre:"alejandra",apellido:"martinez",cursos:[1,2,3]}
  ]
  estudiantes =this.estudiantesOriginal
}
