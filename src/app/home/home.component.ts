import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { RouteService } from '../route.service';
import {MatDialog} from "@angular/material/dialog";

export interface AlarmModel{
	title:String,
	subtitle:String,
	tipo:String,
	active:boolean,
	hora:String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {

  alarmas: AlarmModel[]=[];

	 constructor(public dialog: MatDialog ,routeService:RouteService) {
		 routeService.title="Inicio"
     routeService.menu = true
		 this.alarmas=[
			 {
				 title:"Actaminofen",
				 subtitle:"500 mg Tomar 2",
				 tipo:"medicamento",
				 active: true,
				 hora:"80:00 AM"
			 },
			 {
				 title:"Cardiologia",
				 subtitle:"cada 2 meses",
				 tipo:"cita",
				 active: false,
				 hora:"80:00 AM"
			 },
			  {
				 title:"Optometria",
				 subtitle:"Control medico cada año",
				 tipo:"cita",
				 active: false,
				  hora:"10:00 AM"
			 },
			  {
				 title:"Lozartan",
				 subtitle:"500 mg Tomar 1",
				 tipo:"medicamento",
				 active: false,
				  hora:"01:00 PM"
			 },
			  {
				 title:"Actaminofen",
				 subtitle:"500 mg Tomar 2",
				 tipo:"medicamento",
				 active: true,
				  hora:"04:00 PM"
			 },
			  {
				 title:"Actaminofen",
				 subtitle:"500 mg Tomar 1",
				 tipo:"medicamento",
				 active: false,
				  hora:"05:00 PM"
			 },

		 ]
	 }


	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
		});

		dialogRef.afterClosed();
	}
	changeStatus(index:number, event:any){
			let alarmModel = this.alarmas[index].active=event.checked
	}
}
