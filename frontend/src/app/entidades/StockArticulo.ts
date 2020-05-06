import { ArticuloInsumo } from './ArticuloInsumo';
import { Common } from './Common';

export class StockArticulo extends Common {
    costoActual: number;
    stockActual: number;
    stockMinimo: number;
    stockMaximo: number;
    unidadMedida: string;
    articuloInsumo: ArticuloInsumo;
}