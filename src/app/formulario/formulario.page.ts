import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: false
})
export class FormularioPage implements OnInit {

  //instanciar el formulario
  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required
      ]),
      apellidos: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12)
      ]),
      edad: new FormControl(null, 
        [
          Validators.min(18),
          Validators.max(99)
        ]
      ),
      email: new FormControl(),
      password: new FormControl(),
      dni: new FormControl(null,
        [
          Validators.required,
          //this.dniValidador
        ]
      )
    });

  }

  ngOnInit() {
    //suscribirse a cambios
    this.formulario.get("nombre")?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((nombreValor) =>{
        console.log(nombreValor);
      });
  }




  onSubmit(event: any){
    //formulario.valid devuelve booleano si los campos cumplen los validadores
    console.log(this.formulario.value);
  }

  checkError(control: string, error: string){
    return this.formulario.get(control)?.hasError(error) && 
    this.formulario.get(control)?.touched;
  }

  dniValidador(control: FormControl){
    const valor: string = control.value;

    const listaLetras = "TRWAGMYFPDXBNJZSQVHLCKET"

    if (!/^\d{8}[a-zA-Z]$/.test(valor)) {
      return { dniValidador: 'El dni es incorrecto'};    
    }

    const numero = parseInt(valor.substring(0, valor.length-1));

    const letra = valor.substring(valor.length-1);

    const calculoPos = numero % 23;

    if(letra !== listaLetras[calculoPos]){
      return { dniValidador: 'La letra no coincide'}; 
    }

      return null;
  }

}
