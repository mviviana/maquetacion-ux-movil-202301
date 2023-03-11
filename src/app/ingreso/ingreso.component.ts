import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent  {

  constructor(routeService:RouteService) {
		routeService.menu = false
	}
}
