import { Component, OnInit } from '@angular/core';
import { Clima } from '../interfaces/clima';
import { Region, listaRegiones, dias, climas, tiempo } from '../interfaces/region';

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

}
