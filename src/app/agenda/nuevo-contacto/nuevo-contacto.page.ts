import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
  standalone: false
})
export class NuevoContactoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  onOpenMenu(){
    this.menuController.toggle();
  }

}
