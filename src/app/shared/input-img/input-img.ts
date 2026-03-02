import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { tobase64 } from '../tobase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.html',
})
export class InputImg {
  @Input({required:true}) titulo!:string
  @Output() archivoSeleccionado = new EventEmitter<File>()
  @Input() urlImagenactual?:string

  imagenBase64?:string

  cambio(event:Event){
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length>0){
      const file: File = input.files[0]
      tobase64(file).then((valor:string) => this.imagenBase64 = valor)
      .catch(error => console.log(error))
      this.archivoSeleccionado.emit(file)
      this.urlImagenactual= undefined
    }

  }
 }
