import { Common } from './Common';

export class ArticuloInsumo extends Common {
  costo_de_venta: number;
  require_refrigeracion: boolean;
  stock_actual: number;
  stock_minimo: number;
  unidadMedidaID: number;
}
