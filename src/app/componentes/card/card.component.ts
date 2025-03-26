import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent  implements OnInit {

  @Input() nombre: string;
  @Input() email: string;
  @Input() tfno: string;

  @Output() editarContacto: EventEmitter<string>;

  
  constructor() {
    this.nombre = '';
    this.email = '';
    this.tfno = '';

    this.editarContacto = new EventEmitter();
   }

  ngOnInit() {}

  editar(){
    this.editarContacto.emit(this.nombre);
  }

}
