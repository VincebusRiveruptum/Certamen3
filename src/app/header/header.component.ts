import { Component, OnInit } from '@angular/core';
import { Region, listaRegiones, dias, climas, tiempo, nombreregiones } from '../interfaces/region';
import { PronosticosemanaComponent } from '../pronosticosemana/pronosticosemana.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  nombreregiones=nombreregiones;
  tiempo=tiempo;
  constructor() { }

  ngOnInit(): void {
  }
  definirRegion(reg:number){
    tiempo.regionSeleccionada = reg;
  }
  definirCelsius(){
    if(tiempo.celsiusfahrenheit==true){
      tiempo.celsiusfahrenheit=!tiempo.celsiusfahrenheit;
    }
  }
  definirFahrenheit(){
    if(tiempo.celsiusfahrenheit==false){
      tiempo.celsiusfahrenheit=!tiempo.celsiusfahrenheit;
    }
  }
}
