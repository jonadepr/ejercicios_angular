import { Component, OnInit } from '@angular/core';
import {Servicio} from 'src/app/models/services/servicio';
import {Proveedor} from 'src/app/models/services/proveedor';

@Component({
  selector: 'app-servicio1',
  templateUrl: './servicio1.component.html',
  styleUrls: ['./servicio1.component.css']
})


export class Servicio1Component implements OnInit {

  public servicio: Servicio;
  public unidades: number;
  public classes: any;
  public proveedor: Proveedor;
  public array: number[];

  constructor() { }

  ngOnInit(): void {
    this.servicio = new Servicio('Instalación de antivirus', 29.99, 'https://www.adslzone.net/app/uploads/2018/10/antivirus-pc.jpg', true);
    this.unidades = 0;
    this.array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.proveedor = new Proveedor('Luis', 'López Vázquez', '23456652P', 'https://img2.freepng.es/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg', 10);

    this.classes = {
       imagen: !this.servicio.novedad,
       imagennovedad: this.servicio.novedad
     };

  }

  sumar() {
    this.unidades = this.unidades + 1;
  }

  restar() {
    this.unidades = this.unidades - 1;
  }
}
