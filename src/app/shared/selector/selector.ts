import { Component, Input } from '@angular/core';
import { SelectorDTO } from './selectormodelo';

@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.html',
})
export class Selector {
  @Input({required: true}) selecionados!: SelectorDTO[]
  @Input({required: true}) noselecionados!:SelectorDTO[]


  seleccionar(elemento:SelectorDTO,indice:number){
    this.selecionados.push(elemento)
    this.noselecionados.slice(indice,1)
  }

  deseleccionar(elemento:SelectorDTO,indice:number){
    this.selecionados.push(elemento)
    this.noselecionados.splice(indice,1)
  }

  selecionartodo(){
    this.selecionados.push(...this.noselecionados)
    this.noselecionados.length=0

  }

  deselecionartodo(){
    this.noselecionados.push(...this.selecionados)
    this.selecionados.length=0
  }
}
