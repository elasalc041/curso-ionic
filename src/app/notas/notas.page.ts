import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
  standalone: false
})
export class NotasPage implements OnInit {

  variable_boolean: boolean;

  constructor() {
    this.variable_boolean = true;
   }

  ngOnInit() {
  }

  toogleMostrar(){
    this.variable_boolean = !this.variable_boolean;
  }

}
