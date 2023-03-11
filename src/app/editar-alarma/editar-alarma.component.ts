import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-editar-alarma',
  templateUrl: './editar-alarma.component.html',
  styleUrls: ['./editar-alarma.component.scss'],
})
export class EditarAlarmaComponent   {
  date = new FormControl(new Date());
	medicamento = true;
	constructor(routeService:RouteService) {
		routeService.title="Editar alarma"
	}
}
