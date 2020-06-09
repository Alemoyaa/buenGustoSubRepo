import {Common} from "./Common";
import {Categoria} from "./Categoria";

export abstract class Articulo extends Common{
    denominacion: string
    es_catalogo: boolean
    precio_de_venta: number
    url_imagen: string
    categoriaID: Categoria
}
