import { Common } from './Common';
import {Articulo} from './Articulo';
import {UnidadMedida} from './UnidadMedida';

export class ArticuloInsumo extends Articulo {
  costo_de_venta: number;
  require_refrigeracion: boolean;
  stock_actual: number;
  stock_minimo: number;
  unidadMedidaID: UnidadMedida;
}
