import { Component, OnInit } from '@angular/core';
import {RouteService} from "../route.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './ver-alarma.component.html',
  styleUrls: ['./ver-alarma.component.scss'],
})
export class VerAlarmaComponent implements OnInit {

  title:String="";
  subtitle:String="";
  hora:String="";


  constructor(public routeService:RouteService,public dialog: MatDialog,private activatedRoute:ActivatedRoute, private router:Router,private _location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.title=param['title'];
      this.subtitle=param['subtitle'];
      this.hora=param['hora'];
      this.routeService.setNavOpts({
        title:this.title,
        showMenu:true,
        backOption:true,
        todayOption:false
      });
  })
  }

  back(){
    this.routeService.setNavOpts({
      title:"Hoy",
      showMenu:true,
      backOption:true,
      todayOption:false
    });
    this.router.navigate(["home"]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "¿Estas seguro que deseas eliminar la alrma ?",
        subtitle: "Esta acción es permanente",
        back:true,
        routeBack:"close",
        next:"close",
        routeNext:"ingreso",
        iconDelete:true
      },
    });

  }
}
