import { RecetaInsumo } from './RecetaInsumo';
import { Common } from './Common';
import { Receta } from './Receta';
import { ArticuloInsumo } from './ArticuloInsumo';

export class RecetaDetalle extends Common {
    cantidad: number;
    unidadMedida: string;
    tipoDetalleReceta: string;
    receta: Receta;
    articuloInsumo: ArticuloInsumo;
    recetaInsumo: RecetaInsumo;
}
