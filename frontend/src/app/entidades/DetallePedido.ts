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
}
