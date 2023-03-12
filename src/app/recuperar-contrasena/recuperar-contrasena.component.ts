import { Component, OnInit } from '@angular/core';
import {RouteService} from "../route.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss'],
})
export class RecuperarContrasenaComponent  implements OnInit {


  constructor(public routeService:RouteService,public dialog: MatDialog ) {
    routeService.setNavOpts({
      title:" ",
      showMenu:false,
      backOption:false,
      todayOption:false
    });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Hemos enviado un correo con las instrucciones para recuperar su contraseña",
        subtitle: "Por favor siga las instrucciones",
        back:false,
        routeBack:"",
        next:"route",
        routeNext:"ingreso"
      },
    });

  }
}
