export class Servicio {
  public nombre: string;
  public precio: number;
  public imagen: string;
  public novedad = false;

  constructor(
    nombre: string,
    precio: number,
    imagen: string,
    novedad: boolean
  ){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.novedad = novedad;
  }
}
