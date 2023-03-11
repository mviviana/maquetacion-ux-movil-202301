import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss'],
})
export class CrearAlarmaComponent  {
  medicamento = true;
	constructor(routeService:RouteService) {
		routeService.title="Crear alarma"
	}
}
