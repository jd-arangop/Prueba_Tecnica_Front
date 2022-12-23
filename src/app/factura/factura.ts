import { Cliente } from "../clientes/Cliente";

export class Factura {
    numFactura?: number;
    fecha: any;
    cliente: Cliente

    constructor(
        fecha: any,
        cliente: Cliente,
        numFactura?: number
    ){
        this.numFactura = numFactura
        this.fecha = fecha
        this.cliente = cliente
    }

}
