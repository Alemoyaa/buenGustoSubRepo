import { Common } from './Common';
import { UnidadMedida } from './UnidadMedida';
import { Categoria } from './Categoria';

export class ArticuloInsumo extends Common {
  denominacion: string;
  precio_de_venta: number;
  precio_de_compra: number;
  stock_actual: number;
  stock_minimo: number;
  stock_maximo: number;
  requiere_refrigeracion: boolean;
  es_catalogo: boolean;
  url_imagen?: string;

  unidadMedidaID: UnidadMedida;
  categoria: Categoria;
}
