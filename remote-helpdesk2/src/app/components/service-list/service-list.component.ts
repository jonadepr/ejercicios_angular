import { Component, OnInit } from '@angular/core';
import Service from 'src/app/model/service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  public services: Service[];

  constructor() { }

  ngOnInit(): void {
    this.services = [
      new Service(
        'Instalacion Antivirus',
        69.99,
        'assets/img/antivirus.jpg',
        false),
      new Service(
        'Instalar Office',
        99.99,
        'https://s4.eestatic.com/2017/06/07/actualidad/Actualidad_221989976_129913932_1024x576.jpg',
        true),
      new Service(
        'Instalar VLC LAN',
        19.99,
        'https://w7.pngwing.com/pngs/139/153/png-transparent-vlc-media-player-computer-icons-others-orange-media-media-player.png',
        true
      )
    ];
  }

}
