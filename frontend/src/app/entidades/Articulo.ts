import { Common } from './Common';
import { Categoria } from './Categoria';

export abstract class Articulo extends Common {
  precio_de_venta: number;
  url_Imagen?: string;
  es_catalogo: boolean;
  denominacion: string;
  categoria: Categoria;
}
