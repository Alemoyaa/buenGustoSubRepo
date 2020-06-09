import {Common} from "./Common";
import {Articulo} from "./Articulo";

export class DetallePedido extends Common{
    cantidad: number
    subtotal: number
    articuloID: Articulo
}
