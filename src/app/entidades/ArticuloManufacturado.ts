import { RubroGeneral } from './RubroGeneral';
import { DetalleManufacturado } from './DetalleManufacturado';
import { Common } from './Common';

export class ArticuloManufacturado extends Common {
  precio_de_venta: number;
  url_imagen?: string;
  denominacion: string;
  tiempo_estimado_manuf: number;

  costo_de_manuf: number;

  lista_detalleManufacturado: DetalleManufacturado[];
  rubro: RubroGeneral;
}
