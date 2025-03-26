import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  contactos: any[];

  //utilizar un servicio 
  //servicio contactos

  constructor( private contactosService: ContactosService) { 
    this.contactos = [];
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    //método getAll desarrollado en el servicio
    this.contactos = this.contactosService.getAll();
    console.log(this.contactos);
  }

}
