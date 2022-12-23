import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { FacturaModule } from '../factura/factura.module';

@NgModule({
  imports: [
    CommonModule,
    FacturaModule
  ],
  exports: [ProductoListComponent],
  declarations: [ProductoListComponent]
})
export class ProductosModule { }
