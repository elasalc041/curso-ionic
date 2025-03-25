import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage implements OnInit {

  lista: string [];

  constructor() { 
    this.lista = ["Mario", "Laura", "Rocío"];
  }

  ngOnInit() {
  }

}
