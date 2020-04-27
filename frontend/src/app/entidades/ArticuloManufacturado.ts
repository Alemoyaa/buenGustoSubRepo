import { Common } from './Common';
import { Articulo } from './Articulo';
import { Receta } from './Receta';
export class ArticuloManufacturado extends Common{
  tiempoEstimadoCocina: number;
  _urlImagen: String;
  receta : Receta;
  articulo: Articulo;
  
}
