import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { EditarAlarmaComponent } from './editar-alarma/editar-alarma.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
		path: "home",
		component: HomeComponent
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
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
