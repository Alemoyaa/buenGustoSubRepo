import { Articulo } from './Articulo';
import { RubroArticulo } from './RubroArticulo';
import { Common } from './Common';

export class ArticuloInsumo extends Common{
  denominacion: string;
  precioCompra: number;
  stockActual: number;
  stockMinimo: number;
  unidadMedida: string;
  _urlImagen: string;
  articulo: Articulo;
}
