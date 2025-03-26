import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: false
})
export class EditarPage implements OnInit {

  formulario: FormGroup;

  //inyectar objeto para interactuar con la url
  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductosService
  ) { 
    this.formulario = new FormGroup({
      _id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      image: new FormControl(),
      active: new FormControl()   
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.activatedRoute.params.subscribe(async parametro =>{
      const resp = await this.productoService.getById(parametro['productoId']);
      console.log(resp);

      
      this.formulario.setValue(resp);
    })
  }

  async onEdit(){
    //console.log(this.formulario.value);
     const resp = await this.productoService.updateById(this.formulario.value);
     console.log(resp);
  }

}
