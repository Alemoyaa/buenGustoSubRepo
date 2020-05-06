import { SubcategoriaAM } from './SubcategoriaAm';
import { Common } from './Common';
import { Receta } from './Receta';
export class ArticuloManufacturado extends Common {
  denominacion: string;
  precioVenta: number;
  precioCompra: number;
  _urlImagen?: string;
  fechaBaja: Date;
  tiempoEstimadoCocina: Date;
  subcategoriaAM: SubcategoriaAM;
  receta: Receta;
}
