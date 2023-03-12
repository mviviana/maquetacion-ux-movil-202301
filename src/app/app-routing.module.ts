import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { EditarAlarmaComponent } from './editar-alarma/editar-alarma.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { RegistroComponent } from './registro/registro.component';
import {RecuperarContrasenaComponent} from "./recuperar-contrasena/recuperar-contrasena.component";
import {TodayComponent} from "./today/today.component";

const routes: Routes = [
  {
		path: "",
		redirectTo:"ingreso",
    pathMatch:"full"
	},
  {
		path: "home",
		component: HomeComponent
	},{
		path: "today",
		component: TodayComponent
	},
  {
		path: "ingreso",
		component: IngresoComponent
	},
  {
		path: "registro",
		component: RegistroComponent
	},
  {
		path: "listar-alarmas",
		component: ListadoAlarmasComponent
	},
  {
		path: "crear-alarma",
		component: CrearAlarmaComponent
	},
  {
		path: "editar-alarma",
		component: EditarAlarmaComponent
	},
  {
		path: "crear-medicamento",
		component: CrearMedicamentoComponent
	},{
		path: "recuperar-contrasena",
		component: RecuperarContrasenaComponent
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
