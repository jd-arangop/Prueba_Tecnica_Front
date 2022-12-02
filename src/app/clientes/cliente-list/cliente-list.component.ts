import { Component, OnInit } from '@angular/core';
import { ClienteDetail } from '../Cliente-detail';
import { ClienteService } from '../Cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Array<ClienteDetail> = []

  constructor(private clienteService: ClienteService) { }

  getClientes():void{
    this.clienteService.getClientes().subscribe((clientes) =>{
      this.clientes = clientes;
    });
  }

  ngOnInit() {
    this.getClientes();
  }

}
