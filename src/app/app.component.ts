import { Component } from '@angular/core';
import { RouteService } from './route.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title:String = 'app-web';
  menu:boolean =true
constructor(public routeService:RouteService) {
	this.title=routeService.title;
  this.menu =routeService.menu;
}
}
