import { Factura } from "../factura/Factura";
import { Cliente } from "./Cliente";

export class ClienteDetail extends Cliente{
  facturas: Array<Factura> = [];

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    direccion: string,
    fechaNacimiento: any,
    telefono: string,
    email: string,
    facturas: Array<Factura>
  ){
    super(id,nombre,apellido,direccion,fechaNacimiento,telefono,email);
    this.facturas = facturas;
  }
}
