import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { InfoComponent } from 'src/app/modals/info/info.component';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
  standalone: false
})
export class ListaContactosPage implements OnInit {

  constructor(private navController: NavController,
    private modalController: ModalController,
  ) { 
    
  }

  ngOnInit() {
  }

  onClickDetalle(){
    this.navController.navigateForward("/agenda/detalle-contacto")
  }

  openModal(){
    this.modalController.create({
      component: InfoComponent,
      componentProps: {
        nombre: "Laura",
        tfno: "665556565",
        email: "laura@gmail.com"
      }
    }).then(e => {
      e.present();
      e.onDidDismiss().then(result =>{
        console.log(result);
      });
    });
  }

  onEditarContacto(evento: string){
    console.log(evento)
  }

}
