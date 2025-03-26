import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url: string;

    constructor(
      private httpClient: HttpClient
    ) {
      this.url = "https://peticiones.online/api/products";
     }

     getAll(){
      return this.httpClient.get<any>(this.url);
     }

     getById(productoId: string){
      return this.httpClient.get<any>(`${this.url}/${productoId}`);
     }

     createPOST(body: any){
      return this.httpClient.post<any>(this.url, body);
     }

     updateById(formValues: any){
      return firstValueFrom(
        this.httpClient.put(`${this.url}/${formValues['_id']}`, formValues)
      );
     }

     deleteById(productoId: string){
      return firstValueFrom(
        this.httpClient.delete<any>(`${this.url}/${productoId}`)
      );
     }

}
