import { Common } from './Common';
import {Articulo} from './Articulo';

export class DetallePedido extends Common {
  articuloID: Articulo;
  cantidad: number;
  subtotal: number;
}
