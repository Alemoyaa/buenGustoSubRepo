import { Common } from './Common';

export class Articulo extends Common {
  categoriaId: any;
  denominacion: string;
  es_catalogo: number;
  precio_de_venta: boolean;
  _url_Imagen?: string;
}
