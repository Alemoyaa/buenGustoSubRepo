import { Common } from './Common';
import { RubroGeneral } from './RubroGeneral';
export class ArticuloManufacturado extends Common{
  tiempoEstimadoCocina: number;
  denominacion: string;
  precioVenta: number;
  rubroGeneral: RubroGeneral;
}
