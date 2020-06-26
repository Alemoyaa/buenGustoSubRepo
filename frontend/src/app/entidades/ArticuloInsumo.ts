import { Common } from './Common';
import { Articulo } from './Articulo';
import { UnidadMedida } from './UnidadMedida';

export class ArticuloInsumo extends Articulo {
  precio_de_compra: number;
  requiere_refrigeracion: boolean;
  stock_actual: number;
  stock_minimo: number;
  unidadMedidaID: UnidadMedida;
}
