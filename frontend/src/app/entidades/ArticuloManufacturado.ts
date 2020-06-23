import { Articulo } from './Articulo';
import { DetalleManufacturado } from './DetalleManufacturado';

export class ArticuloManufacturado extends Articulo {
  costo_de_manuf: number;
  lista_detalleManufacturado: DetalleManufacturado[];
  tiempo_estimado_manuf: number;
}
