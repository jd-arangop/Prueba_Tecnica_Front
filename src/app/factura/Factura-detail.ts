import { Cliente } from "../clientes/Cliente";
import { Detalle } from "../detalle/detalle";
import { Factura } from "./Factura";

export class FacturaDetail extends Factura{
    detalles: Array<Detalle>

    constructor(
        fecha: any,
        cliente: Cliente,
        detalles: Array<Detalle>,
        numFactura?: number
    ){
        super(fecha,cliente, numFactura);
        this.detalles = detalles
    }
}
