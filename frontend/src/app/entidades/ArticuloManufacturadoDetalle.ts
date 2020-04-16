import { ArticuloInsumo } from './ArticuloInsumo';
import { ArticuloManufacturado } from './ArticuloManufacturado';
import { Common } from './Common';

export class ArticuloManufacturadoDetalle extends Common{
  cantidad: number;
  unidadMedida: string;
  articuloManufacturado: ArticuloManufacturado;
  articuloInsumo: ArticuloInsumo;
}
