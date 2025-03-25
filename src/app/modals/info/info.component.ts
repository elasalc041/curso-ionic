import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  standalone: false
})
export class InfoComponent  implements OnInit {

  @Input() nombre!: string;
  @Input() tfno!: string;
  @Input() email!: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClickCerrar(){
    this.modalController.dismiss({
      mensaje: "Cierra el modal"
    }, "cerrar");
  }

}
