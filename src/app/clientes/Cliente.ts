import { Factura } from "../factura/Factura";

export class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  fechaNacimiento: any;
  telefono: string;
  email: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    direccion: string,
    fechaNacimiento: any,
    telefono: string,
    email: string,
  ){
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.direccion = direccion
    this.fechaNacimiento = fechaNacimiento
    this.telefono = telefono
    this.email = email
  }
}
