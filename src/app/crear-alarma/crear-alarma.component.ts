import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss'],
})
export class CrearAlarmaComponent  {
  medicamento = true;
	constructor(private routeService:RouteService,private router:Router) {
		routeService.setNavOpts({
      title:"Crear alarma",
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
    this.router.navigate(['today']);
  }
}
