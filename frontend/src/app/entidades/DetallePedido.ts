import { ArticuloInsumo } from './ArticuloInsumo';
import { Factura } from './Factura';
import { Pedido } from './Pedido';
import { Common } from './Common';
import { ArticuloManufacturado } from './ArticuloManufacturado';

export class DetallePedido extends Common{
  cantidad: number;
  subtotal: number;
  pedido: Pedido;
  factura: Factura;
  articuloManufacturado: ArticuloManufacturado;
  articuloInsumo: ArticuloInsumo;
}
