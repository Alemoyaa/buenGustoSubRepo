import { ArticuloInsumo } from './ArticuloInsumo';
import { Common } from './Common';

export class RecetaInsumo extends Common {
    nombre: string;
    fechaAlta: Date;
    fechaBaja: Date;
    articuloInsumo: ArticuloInsumo;
}