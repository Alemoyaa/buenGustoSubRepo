import { Common } from './Common';
import { Receta } from './Receta';
export class ArticuloManufacturado extends Common {
  tiempoEstimadoCocina: number;
  _urlImagen: String;
  receta: Receta;

}
