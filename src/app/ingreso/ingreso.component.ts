import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements OnInit {

  constructor(public routeService:RouteService) {
    routeService.setNavOpts({
      title:" ",
      showMenu:false,
      backOption:false,
      todayOption:false
    });
	}

  ngOnInit(): void {
  }
}
