import { Component, Input, OnInit } from '@angular/core';
import { FacturaDetail } from '../Factura-detail';

@Component({
  selector: 'app-Factura-detail',
  templateUrl: './Factura-detail.component.html',
  styleUrls: ['./Factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  @Input() factura!: FacturaDetail
  total: number = 0

  constructor() { }

  ngOnInit() {
    var detalles = this.factura.detalles
    for (let detalle of detalles){
      this.total += detalle.precio
    }
  }

}
