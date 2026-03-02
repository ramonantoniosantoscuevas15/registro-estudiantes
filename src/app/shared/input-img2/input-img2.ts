import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { tobase64 } from '../tobase64';

@Component({
  selector: 'app-input-img2',
  imports: [MatButtonModule],
  templateUrl: './input-img2.html',
})
export class InputImg2 {
  @Input({required:true}) titulo!:string
  @Output() archivoSeleccionado2 = new EventEmitter<File>()
  @Input() urlimagenactual2?:string

  imagenBase64?:string

  cambio(event:Event){
      const input = event.target as HTMLInputElement
      if(input.files && input.files.length>0){
        const file: File = input.files[0]
        tobase64(file).then((valor:string) => this.imagenBase64 = valor)
        .catch(error => console.log(error))
        this.archivoSeleccionado2.emit(file)
        this.urlimagenactual2= undefined
      }

    }
}
