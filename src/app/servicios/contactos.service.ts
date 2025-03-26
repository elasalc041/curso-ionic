import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private arrayContactos: any[];

  constructor() {
    this.arrayContactos = [
      { nombre: "laura", apellidos: "García", edad: 23 },
      { nombre: "Luis", apellidos: "Pérez", edad: 35 },
      { nombre: "Antonio", apellidos: "García", edad: 15 },
    ]
   }

   getAll(){
    return this.arrayContactos;
   }

}
