import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Region, listaRegiones, tiempo } from '../interfaces/region';
import { Clima } from '../interfaces/clima';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  estado:boolean=false;

  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      inputregiones:['', Validators.required],
      inputdia:['', Validators.required],
      rtiempo:['', Validators.required],
      inputtemp:['', Validators.required],
      rgrados:['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
 
  ValidarDatos(){
    this.estado=true;
    let datos:any=[{
      "inputregiones": this.formulario.get("inputregiones")?.value,
      "inputdia": this.formulario.get("inputdia")?.value,
      "rtiempo": this.formulario.get("rtiempo")?.value,
      "inputtemp": this.formulario.get("inputtemp")?.value,
      "rgrados": this.formulario.get("rgrados")?.value
    }]; 

    if (datos[0].rgrados == "Fahrenheit"){
      datos[0].inputtemp = ((datos[0].inputtemp - 32) / 1.8);
    }

    console.log(datos);
    this.modificarDatos(datos);
  }

  modificarDatos(datos:any){
    let pr:Clima = listaRegiones[datos[0].inputregiones].pronostico[datos[0].inputdia];
    pr.clima = datos[0].rtiempo;
    pr.temperatura = datos[0].inputtemp;
  }
}
