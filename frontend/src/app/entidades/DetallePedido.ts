import { Common } from './Common';
import { Articulo } from './Articulo';

export class DetallePedido extends Common {
  articulo: Articulo;
  cantidad: number;
  subtotal: number;
}
