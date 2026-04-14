import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Login } from "../../login/login";
import { Autorizado } from "../../autorizado/autorizado";
import { Seguridad } from '../../security/seguridad';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule,  Autorizado],
  templateUrl: './menu.html',
})
export class Menu {
  seguridad = inject(Seguridad)
}
