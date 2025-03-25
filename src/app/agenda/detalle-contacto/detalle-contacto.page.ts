import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
  standalone: false
})
export class DetalleContactoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onClickVolver(){
    this.navController.navigateBack("/agenda/listado")
    //this.navController.pop()
  }

}
