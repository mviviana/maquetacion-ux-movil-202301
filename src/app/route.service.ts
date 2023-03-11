import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  title: String = "Inicio";
  menu: boolean = true;

	constructor() {
	}

	setTitle(title: String) {
		this.title = title;
    this.menu =true
	}


}