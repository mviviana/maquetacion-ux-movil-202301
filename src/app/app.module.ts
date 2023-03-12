import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarAlarmaComponent } from './editar-alarma/editar-alarma.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroComponent } from './registro/registro.component';
import {RouteService} from "./route.service";
import {RecuperarContrasenaComponent} from "./recuperar-contrasena/recuperar-contrasena.component";
import {TodayComponent} from "./today/today.component";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CrearAlarmaComponent,
    CrearMedicamentoComponent,
    HomeComponent,
    DialogComponent,
    EditarAlarmaComponent,
    ListadoAlarmasComponent,
    IngresoComponent,
    RegistroComponent,
    RecuperarContrasenaComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MatDialogModule,RouteService,DatePipe ],
  bootstrap: [AppComponent],
})
export class AppModule {}
