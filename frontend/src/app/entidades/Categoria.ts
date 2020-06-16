import { Common } from './Common';

export class Categoria extends Common {
  categoriaPadreID: Categoria;
  categoriaHijo: Categoria[];
  insumoOManuf: boolean;
  nombreCategoria: string;
}
