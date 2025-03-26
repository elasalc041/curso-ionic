import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
  standalone: false
})
export class ActionPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) {

   }

  ngOnInit() {
  }

  async onPresentSheet(){
    //crear menu
    const promesaResult = await this.actionSheetController.create({ //devuleve una promesa
      header: 'Cabecera',
      subHeader: 'Subtítulo',
      buttons: [
        { text: 'Eliminar', role: 'destructive', data: { action: 'eliminar'} },
        { text: 'Compartir', data: { action: 'compartir'} },
        { text: 'Cancelar', role: 'cancel', data: { action: 'cancelar'} }
      
      ]
    });
    //presentar menu
    await promesaResult.present();

    const  fin = await promesaResult.onDidDismiss();
    console.log(fin);
  }

}
