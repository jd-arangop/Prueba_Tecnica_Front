import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/Cliente';
import { Factura } from 'src/app/factura/Factura';
import { FacturarService } from '../../facturar.service';
import { ProductoDetail } from '../producto-detail';
import { ProductoService } from '../producto.service';
import { ClienteService } from 'src/app/clientes/Cliente.service';
import { Detalle } from 'src/app/detalle/detalle';
import { FacturaDetail } from 'src/app/factura/Factura-detail';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  cliente!: Cliente
  productos: Array<ProductoDetail> = []
  cart: Array<ProductoDetail> = []

  selected: Boolean = false
  selectedFactura!: FacturaDetail

  constructor(private clienteService: ClienteService, private productoService: ProductoService, private facturarService: FacturarService) { }

  getProductos(): void{
    this.productoService.getProductos().subscribe((productos) => {
      this.productos = productos
    })
  }

  addCart(producto: any){
    this.facturarService.addCart(producto)
  }

  facturar(){
    var addFactura: Factura = new Factura(new Date(), this.cliente)
    this.facturarService.postFactura(addFactura).subscribe((factura) =>{
      this.facturarService.getProductos().subscribe((productos)=>{
        this.cart = productos
        var addDetalles: Array<Detalle> = []
        for (let i = 0; i<this.cart.length; i++){
          addDetalles.push(new Detalle(i+1,factura,this.cart[i],1,this.cart[i].precio))
        }
        this.facturarService.postDetalle(addDetalles).subscribe((detalles)=>{
          let id: number = Number(factura.numFactura)
          this.facturarService.getFactura(id).subscribe((a)=>{
            this.selectedFactura = a
            this.selected = true
          })
        })
      })
    });
  }

  ngOnInit() {
    this.getProductos();
    this.clienteService.getCliente('1').subscribe((cliente)=>{
      this.cliente = cliente
    });
  }

}
