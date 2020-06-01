import { Component, OnInit } from '@angular/core';
import {Servicio} from 'src/app/models/services/servicio';

@Component({
  selector: 'app-servicio1',
  templateUrl: './servicio1.component.html',
  styleUrls: ['./servicio1.component.css']
})


export class Servicio1Component implements OnInit {

  public servicio: Servicio;
  public unidades: number;
  constructor() { }

  ngOnInit(): void {
    this.servicio = new Servicio('Instalación de antivirus', 29.99, 'https://www.adslzone.net/app/uploads/2018/10/antivirus-pc.jpg', true);
    this.unidades = 1;
  }

  sumar() {
    this.unidades = this.unidades + 1;
  }

  restar() {
    this.unidades = this.unidades - 1;
  }
}
