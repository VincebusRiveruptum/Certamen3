import { Clima } from "./clima";



export let nombreregiones = [
    "Valparaiso",
    "Santiago",
    "Bio-Bio",
    "Araucanía"
];

export let dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];

export let climas = [
    "Soleado",
    "Lluvioso",
    "Tormenta"
];

export interface Region {
    nombre:number;
    pronostico:Clima[];
}

export interface PronosticoTiempo{
    regionSeleccionada:number;
    celsiusfahrenheit:boolean;
}

export let tiempo:PronosticoTiempo = {regionSeleccionada:0,celsiusfahrenheit:false};

export let listaRegiones:Array<Region> = [
    {nombre:0, pronostico:[
        {dia:0, clima:0, temperatura:25},
        {dia:1, clima:1, temperatura:21},
        {dia:2, clima:0, temperatura:28},
        {dia:3, clima:0, temperatura:25},
        {dia:4, clima:1, temperatura:24},
        {dia:5, clima:2, temperatura:22},
        {dia:6, clima:2, temperatura:21}  
    ]},
    {nombre:1, pronostico:[
        {dia:0, clima:0, temperatura:28},
        {dia:1, clima:0, temperatura:27},
        {dia:2, clima:0, temperatura:28},
        {dia:3, clima:1, temperatura:25},
        {dia:4, clima:2, temperatura:23},
        {dia:5, clima:2, temperatura:21},
        {dia:6, clima:1, temperatura:20} 
    ]},
    {nombre:2, pronostico:[
        {dia:0, clima:1, temperatura:20},
        {dia:1, clima:1, temperatura:18},
        {dia:2, clima:1, temperatura:20},
        {dia:3, clima:0, temperatura:22},
        {dia:4, clima:1, temperatura:22},
        {dia:5, clima:2, temperatura:20},
        {dia:6, clima:1, temperatura:17} 
    ]},
    {nombre:3, pronostico:[
        {dia:0, clima:2, temperatura:19},
        {dia:1, clima:1, temperatura:17},
        {dia:2, clima:1, temperatura:20},
        {dia:3, clima:1, temperatura:20},
        {dia:4, clima:0, temperatura:21},
        {dia:5, clima:2, temperatura:20},
        {dia:6, clima:2, temperatura:15} 
    ]}
];
