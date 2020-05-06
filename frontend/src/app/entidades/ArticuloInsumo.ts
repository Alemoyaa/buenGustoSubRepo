import { StockArticulo } from './StockArticulo';
import { SubcategoriaAI } from './SubcategoriaAI';
import { Common } from './Common';

export class ArticuloInsumo extends Common {
  denominacion: string;
  precioVenta: number;
  precioCompra: number;
  requiereRefrigeracion: boolean;
  fechaBaja: Date;
  _urlImagen?: string;
  subcategoriaAI: SubcategoriaAI;
  stockArticulo: StockArticulo;
}
