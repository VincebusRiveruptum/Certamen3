import { Component, OnInit } from '@angular/core';
import { Clima } from '../interfaces/clima';
import { Region, listaRegiones, dias, climas, tiempo, PronosticoTiempo } from '../interfaces/region';

@Component({
  selector: 'app-pronosticosemana',
  templateUrl: './pronosticosemana.component.html',
  styleUrls: ['./pronosticosemana.component.scss']
})

export class PronosticosemanaComponent implements OnInit {
  dias=dias;
  climas=climas;
  listaRegiones=listaRegiones;
  tiempo=tiempo;
  constructor() { }

  ngOnInit(): void {
  }
  
  obtenerDia(climaregion:Clima):Clima{
    /* Pasamos el día de la semana a modificar */
    /*
    console.log(climaregion.clima);
    console.log(climaregion.dia);
    console.log(climaregion.temperatura)
    */
    return climaregion;
  }
}
