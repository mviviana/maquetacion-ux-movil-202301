import { Component } from '@angular/core';
import { RouteService } from './route.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title:String = 'app-web';
  menu:boolean =true
constructor(public routeService:RouteService, private router:Router) {
	this.title=routeService.title;
  this.menu =routeService.menu;
}
  goToday(){
    this.routeService.title="Hoy";
    this.routeService.todayOption=false;
    this.router.navigate(['home']);
  }
}
