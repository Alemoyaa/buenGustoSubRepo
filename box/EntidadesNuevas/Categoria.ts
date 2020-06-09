import {Common} from "./Common";

export class Categoria extends Common{
    insumoOManuf: boolean
    nombreCategoria: string
    categoriaPadreID: Categoria
    categoriaHijoID: Categoria[]
}
