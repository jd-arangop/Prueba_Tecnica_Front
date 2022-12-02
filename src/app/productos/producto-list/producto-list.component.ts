import { Component, OnInit } from '@angular/core';
import { FacturarService } from '../facturar.service';
import { ProductoDetail } from '../producto-detail';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Array<ProductoDetail> = []
  cart: any = [];
  public total!: number;

  selected: Boolean = false;

  constructor(private productoService: ProductoService, private facturarService: FacturarService) { }

  getProductos(): void{
    this.productoService.getProductos().subscribe((productos) => {
      this.productos = productos

      this.productos.forEach((a: any) =>{
        Object.assign(a,{total: a.precio})
      })
    })
  }

  addCart(producto: any){
    this.facturarService.addCart(producto)
  }

  facturar(){
    this.facturarService.getProductos().subscribe(res =>{
      this.cart = res;
      this.total = this.facturarService.getTotal()
      this.selected = true;
    })
  }

  ngOnInit() {
    this.getProductos();
  }

}
