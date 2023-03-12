import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  {

  constructor(routeService:RouteService,public dialog: MatDialog ) {
		routeService.menu = false
	}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Se ha registrado exitosamente",
        subtitle: "Bienvenido usuario",
        back:false,
        routeBack:"",
        next:"route",
        routeNext:"today"
      },
    });

  }

}
