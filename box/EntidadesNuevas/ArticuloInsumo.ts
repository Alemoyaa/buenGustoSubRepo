import {Articulo} from "./Articulo";
import {StockArticulo} from "./StockArticulo";

export class ArticuloInsumo extends Articulo{
    stockArticuloID: StockArticulo
    costo_de_venta: number
    requiere_refrigeracion: boolean
}
