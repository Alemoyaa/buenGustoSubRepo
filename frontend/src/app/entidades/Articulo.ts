import { Common } from './Common';
import {Categoria} from './Categoria';

export abstract class Articulo extends Common {
  denominacion: string;
  es_catalogo: number;
  precio_de_venta: number;
  _url_Imagen?: string;
  categoriaId: Categoria;
}
