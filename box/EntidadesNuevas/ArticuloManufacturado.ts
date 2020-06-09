import {Articulo} from "./Articulo";
import {DetalleManufacturado} from "./DetalleManufacturado";

export class ArticuloManufacturado extends Articulo{
    lista_detalleManufacturado: DetalleManufacturado[]
    costo_de_manuf: number
    tiempo_estimado_manuf: number
}
