import { ArticuloInsumo } from './ArticuloInsumo';
import { Common } from './Common';
import { ArticuloManufacturado } from './ArticuloManufacturado';

export class DetallePedido extends Common {
  cantidad: number;
  subtotal: number;
  aclaracion: string;
  esInsumo: boolean;

  articuloInsumo?: ArticuloInsumo;
  articuloManufacturado?: ArticuloManufacturado;

  // get denominacion(): string {
  //   return this.esInsumo
  //     ? this.articuloInsumo.denominacion
  //     : this.articuloManufacturado.denominacion;
  // }

  // get precioVenta(): number {
  //   return this.esInsumo
  //     ? this.articuloInsumo.precio_de_venta
  //     : this.articuloManufacturado.precio_de_venta;
  // }

  // get imagenArticulo(): string {
  //   return this.esInsumo
  //     ? this.articuloInsumo.url_imagen
  //     : this.articuloManufacturado.url_imagen;
  // }

  // get articulo(): Object {
  //   return this.esInsumo ? this.articuloInsumo : this.articuloManufacturado;
  // }
}
