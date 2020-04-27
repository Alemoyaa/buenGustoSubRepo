import { Common } from './Common';
import { Receta } from './Receta';
import { ArticuloInsumo } from './ArticuloInsumo';

export class RecetaDetalle extends Common{
    cantidad: number;
    unidadMedida: string;
    receta: Receta;
    ArticuloInsumo: ArticuloInsumo;
}