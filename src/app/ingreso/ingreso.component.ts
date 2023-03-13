import {AfterViewInit, Component, OnInit} from '@angular/core';
import { RouteService } from '../route.service';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements AfterViewInit {

  constructor(public routeService:RouteService) {
    routeService.setNavOpts({
      title:" ",
      showMenu:false,
      backOption:false,
      todayOption:false
    });
	}

  async ngAfterViewInit() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}
