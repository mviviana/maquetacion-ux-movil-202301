import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteService } from '../route.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar-alarma',
  templateUrl: './editar-alarma.component.html',
  styleUrls: ['./editar-alarma.component.scss'],
})
export class EditarAlarmaComponent   {
  date = new FormControl(new Date());
	medicamento = true;
	constructor(private routeService:RouteService, private router:Router) {
    routeService.setNavOpts({
      title:"Editar alarma",
      showMenu:true,
      backOption:true,
      todayOption:false
    });
	}
  goToday(){
    this.routeService.setNavOpts({
      title:"Hoy",
      showMenu:true,
      backOption:true,
      todayOption:false
    });
    this.router.navigate(['home']);
  }
}
