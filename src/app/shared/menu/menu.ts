import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Login } from "../../login/login";

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule, Login],
  templateUrl: './menu.html',
})
export class Menu { }
