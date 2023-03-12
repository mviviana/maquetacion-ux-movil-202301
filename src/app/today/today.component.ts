import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import * as moment from 'moment';
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-ingreso',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
selectDate:any;
  constructor(public routeService:RouteService, private router:Router,private datePipe: DatePipe) {
  this.selectDate = moment().toISOString();
    console.log(`Selected: ${this.selectDate}`);


}

  ngOnInit(): void {
    this.routeService.menu = true
    this.routeService.title='Mi agenda'
  }
  dateChanged(date:any) {
    this.selectDate=date.value;
    console.log(date);
    console.log(`Selected: ${  new Date(date)}`);
    console.log(`Selected: ${  moment(moment().toISOString()).isSameOrAfter(new Date(date), 'day')}`);
    if(moment(moment().toISOString()).isSameOrAfter(new Date(date), 'day')){
      this.routeService.title='Hoy'
    }else{
      this.routeService.todayOption=true;
      this.routeService.title=this.datePipe.transform(date,'dd MMM yyyy')!;
    }
    this.router.navigate(['home'])
  }
}
