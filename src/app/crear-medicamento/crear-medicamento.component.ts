import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.scss'],
})
export class CrearMedicamentoComponent   {
  medicamento = true;
	constructor(private routeService:RouteService, private router:Router) {
    routeService.setNavOpts({
      title:"Crear medicamento",
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
