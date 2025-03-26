import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false
})
export class AlertPage implements OnInit {

  constructor(
    private alertController: AlertController,
  private loadingController: LoadingController) {

   }
//para que salga un mensaje de cargando al inicar la pagina
  ngOnInit() {
    this.loadingController.create({
      message: "Cargando...",
      duration: 2000
    }).then((loading) => {
      loading.present();
    }
    );
  }

  //formulario de alerta
  async openAlert() {
    const alerta = await this.alertController.create({
      header: 'Título de la Alerta',
      subHeader: 'Subtítulo de la Alerta',
      message: 'mensaje: Esto es una alerta.',
      buttons: [
        { text: "Confirmar", role: "confirm", handler: () => { 
            console.log("Confirmado"); 
          } 
        },
        { text: "Cancelar", role: "cancel", handler: () => { 
          console.log("cancelado"); 
          } 
        }
      ],

      inputs: [
        { placeholder: "Introduce tu nombre", type: "text" },
        { placeholder: "Introduce tu edad", type: "number", attributes: { min: 18, max: 99 } },
      ]
    });
    
    await alerta.present();

    const resultado = await alerta.onDidDismiss();
    console.log(resultado);
  }

}
