import { ArticuloInsumo } from './ArticuloInsumo';
import { Pedido } from './Pedido';
import { Common } from './Common';
import { ArticuloManufacturado } from './ArticuloManufacturado';

export class DetallePedido extends Common {
  cantidad: number;
  subtotal: number;
  insumoOManufacturado: boolean;
  pedido: Pedido;
  articuloManufacturado: ArticuloManufacturado;
  articuloInsumo: ArticuloInsumo;
}
