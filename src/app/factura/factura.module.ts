import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaDetailComponent } from './Factura-detail/Factura-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FacturaDetailComponent],
  declarations: [FacturaDetailComponent]
})
export class FacturaModule { }
