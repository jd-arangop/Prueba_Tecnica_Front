import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturarService {

  public carrtItems: any =[];
  public productList =  new BehaviorSubject<any>([])

  constructor() { }

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

  removeCart(product: any){
    this.carrtItems.map((a: any, index: any) =>{
      if (product.idProducto === a.idProducto){
        this.carrtItems.splice(index, 1);
      }
    })
  }

  getTotal(): number{
    let total = 0;
    this.carrtItems.map((a: any) =>{
      total += a.precio
    })
    return total;
  }
}
