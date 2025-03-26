import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false
})
export class ProductosPage implements OnInit {

productos: any[];

  //utilizamos un servicio definido por mí
  constructor(
    private productoService: ProductosService,
    private alertController: AlertController
  ) {
    this.productos = [];
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    //metodo getAll definido en mi servicio
    this.productoService.getAll().subscribe(resp =>{
      this.productos = resp.results; 
      console.log(this.productos);
      //para utilizar .results del objeto, es necesario definir en el servicio que el get obtendrá un objeto tipo any --> get<any>
    })
  }

  async borrar(productoId: string){
    const alert = await this.alertController.create({
      header: "¿Quieres borrar el producto?",
      buttons: [
        {text: 'cancelar', role: 'cancel'},
        {text: 'eliminar', role:'confirm', handler: async ()=>{
          const resp = await this.productoService.deleteById(productoId);
          console.log(resp);
        }}
      ]
    });

    await alert.present();


  };

}
