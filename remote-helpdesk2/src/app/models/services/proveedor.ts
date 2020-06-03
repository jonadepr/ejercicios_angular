export class Proveedor {
  public nombre: string;
  public apellidos: string;
  public nif: string;
  public foto: string;
  public valoracion: number;

  constructor(
   nombre: string,
   apellidos: string,
   nif: string,
   foto: string,
   valoracion: number
  ){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nif = nif;
    this.foto = foto;
    this.valoracion = valoracion;
  }
}
