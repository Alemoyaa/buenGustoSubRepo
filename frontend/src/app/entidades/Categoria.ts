import { Common } from './Common';

export class Categoria extends Common {
  padre: Categoria;
  hijos: Categoria[];
  insumoOManuf: boolean;
  nombreCategoria: string;
}
