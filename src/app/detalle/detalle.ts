import { Factura } from "../factura/Factura";
import { Producto } from "../productos/producto";

export class Detalle {
    numDetalle: number
    idFactura: Factura
    producto: Producto
    cantidad: number
    precio: number

    constructor(
        numDetalle: number,
        idFactura: Factura,
        producto: Producto,
        cantidad: number,
        precio: number
    ){
        this.numDetalle = numDetalle
        this.idFactura = idFactura
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
    }
}
