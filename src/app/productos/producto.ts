export class Producto {
  idProducto: number
  nombre: string
  precio: number
  stock: number

  constructor(
    idProducto: number,
    nombre: string,
    precio: number,
    stock: number
  ){
    this.idProducto = idProducto
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }
}
