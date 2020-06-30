import { ArticuloInsumo } from './ArticuloInsumo';
import { Common } from './Common';
import { ArticuloManufacturado } from './ArticuloManufacturado';

export class DetallePedido extends Common {
  cantidad: number;
  subtotal: number;
  aclaracion: string;
  esInsumo: boolean;

  articuloInsumo: ArticuloInsumo;
  articuloManufacturado: ArticuloManufacturado;

  denominacion() {
    return this.esInsumo
      ? this.articuloInsumo.denominacion
      : this.articuloManufacturado.denominacion;
  }

  precioVenta() {
    return this.esInsumo
      ? this.articuloInsumo.precio_de_venta
      : this.articuloManufacturado.precio_de_venta;
  }

  imagenArticulo() {
    return this.esInsumo
      ? this.articuloInsumo.url_imagen
      : this.articuloManufacturado.url_imagen;
  }

  articulo() {
    return this.esInsumo ? this.articuloInsumo : this.articuloManufacturado;
  }
}
