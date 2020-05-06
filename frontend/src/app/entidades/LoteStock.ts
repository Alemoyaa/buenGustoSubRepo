import { StockArticulo } from './StockArticulo';
import { Common } from './Common';

export class LoteStock extends Common {
    numeroLote: number;
    cantidadActual: number;
    precioDeCompra: number;
    cantidadComprada: number;
    unidadMedida: string;
    fechaCompra: Date;
    fechaVencimiento: Date;
    stockArticulo: StockArticulo;
}