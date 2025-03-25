import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage implements OnInit {

  lista: string [];

  constructor() { 
    this.lista = ["Mario", "Laura", "Rocío"];
  }

  ngOnInit() {
    console.log("[ngOnit] agenda")
  }

  ionViewWillEnter() {
    console.log("[ionViewWillEnter] agenda")
  }

  ionViewDidEnter() {
    console.log("[ionViewDidEnter] agenda")
  }

  ionViewWillLeave() {
    console.log("[ionViewWillLeave] agenda")
  }

  ionViewDidLeave() {
    console.log("[ionViewDidLeave] agenda")
  }

  ngOnDestroy(){
    console.log("[ngOnDestroy] agenda")
  }

  
  pulsarNombre(nombre: any){
    console.log(nombre);
  }

}
