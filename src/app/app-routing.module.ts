import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HeaderComponent } from './header/header.component';
import { PronosticosemanaComponent } from './pronosticosemana/pronosticosemana.component';

const routes: Routes = [
  {"path":"pronostico",component:PronosticosemanaComponent},
  {"path":"formulario", component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
