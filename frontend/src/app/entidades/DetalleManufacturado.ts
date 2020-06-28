import { Common } from './Common';
import { ArticuloInsumo } from './ArticuloInsumo';
import { UnidadMedida } from './UnidadMedida';

export class DetalleManufacturado extends Common {
  cantidad: number;
  unidadMedidaID: UnidadMedida;
  articuloInsumoID: ArticuloInsumo;
}
