import { Detalle } from "../detalle/detalle";
import { Producto } from "./producto";

export class ProductoDetail extends Producto{
  detalles: Array<Detalle> = []

  constructor(
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    detalles: Array<Detalle>
  ){
    super(id,nombre,precio,stock)
    this.detalles = detalles
  }
}
