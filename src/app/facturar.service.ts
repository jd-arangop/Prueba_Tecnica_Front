import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Factura } from './factura/Factura';
import { Detalle } from './detalle/detalle';
import { FacturaDetail } from './factura/Factura-detail';

@Injectable({
  providedIn: 'root'
})
export class FacturarService {

  private apiFactura: string = environment.baseUrl+'facturas'
  private apiDetalle: string = environment.baseUrl+'detalles'

  public carrtItems: any =[];
  public productList =  new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.productList.asObservable();
  }

  setProducto(producto: any){
    this.carrtItems.push(...producto);
    this.productList.next(producto);
  }

  addCart(product: any){
    this.carrtItems.push(product);
    this.productList.next(this.carrtItems);
    console.log(this.carrtItems);
  }

  getFactura(id: number): Observable<FacturaDetail>{
    return this.http.get<FacturaDetail>(this.apiFactura+'/'+String(id))
  }

  postFactura(body: any){
    return this.http.post<Factura>(this.apiFactura, body);
  }

  postDetalle(body: any){
    return this.http.post<Array<Detalle>>(this.apiDetalle, body);
  }

}
