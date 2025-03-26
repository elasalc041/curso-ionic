import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
  standalone: false
})
export class ListasPage implements OnInit {

  lista: string[];
  
  constructor() {
    this.lista = [];
   }

  ngOnInit() {
    this.addItems();
  }

  //muchos items para probar scroll infinito
  addItems(){
    for (let i = 0; i <= 49; i++) {
      this.lista.push(`Elemento: ${this.lista.length + 1}`);      
    }
  }

  //Evento de scroll infinito
  onIonScroll(event: any){
    console.log("Final del scroll");
    this.addItems();

    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
