import {Injectable} from '@angular/core';


export interface NavBarOpts {
  title: String;
  showMenu: boolean;
  backOption: boolean;
  todayOption: boolean;
  todayTarget?: String;
  backTarget?: String;

  prevOpts?:NavBarOpts;

}

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private opts: NavBarOpts = {
    title: "Inicio",
    showMenu: true,
    backOption: false,
    todayOption: false,
    todayTarget: ""
  }

  constructor() {
  }

  setNavOpts(opts: NavBarOpts) {
    let prev = this.opts.prevOpts;
    this.opts = opts;
    this.opts.prevOpts=prev;
  }

  getNavOps(): NavBarOpts {
    return this.opts;
  }

}
