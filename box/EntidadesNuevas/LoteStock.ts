import {Common} from "./Common";
import {UnidadMedida} from "./UnidadMedida";

export class LoteStock extends Common {
    numero_lote: number
    cantidad_actual: number
    precio_de_compra: number
    cantidad_comprada: number
    fecha_compra: Date
    fecha_vencimiento: Date
    unidadMedidaID: UnidadMedida
}
