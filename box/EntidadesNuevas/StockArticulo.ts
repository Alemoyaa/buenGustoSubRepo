import {Common} from "./Common";
import {UnidadMedida} from "./UnidadMedida";
import {LoteStock} from "./LoteStock";

export class StockArticulo extends Common{
    costo_actual: number
    stock_actual: number
    stock_minimo: number
    stock_maximo: number
    unidadMedidaID: UnidadMedida
    lista_lote_stock: LoteStock[]
}
