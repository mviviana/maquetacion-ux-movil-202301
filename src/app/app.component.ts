import { Component } from '@angular/core';
import {NavBarOpts, RouteService} from './route.service';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

constructor(public routeService:RouteService, private router:Router,private _location: Location) {
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
  back(opts:NavBarOpts ){
  //this.routeService.setNavOpts(opts?.prevOpts!);
    this.routeService.setNavOpts({
      title:"Hoy",
      showMenu:true,
      backOption:true,
      todayOption:false
    });
  this._location.back();
  }
}
