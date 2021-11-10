import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PronosticosemanaComponent } from './pronosticosemana/pronosticosemana.component';

const routes: Routes = [

  {"path":"pronostico",component:PronosticosemanaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
