import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone : false
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("[ngOnit] mapa")
  }

  ionViewWillEnter() {
    console.log("[ionViewWillEnter] mapa")
  }

  ionViewDidEnter() {
    console.log("[ionViewDidEnter] mapa")
  }

  ionViewWillLeave() {
    console.log("[ionViewWillLeave] mapa")
  }

  ionViewDidLeave() {
    console.log("[ionViewDidLeave] mapa")
  }

  ngOnDestroy(){
    console.log("[ngOnDestroy] mapa")
  }

  navegarMapa(){
    //Acciones previas a la navegación
    //this.router.navigate(['/mapa'])
  }


}
