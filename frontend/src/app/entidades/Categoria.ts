import { Common } from './Common';

export class Categoria extends Common {
  nombreCategoria: string;
  esCategoriaCatalogo: boolean;

  padre: Categoria;
}
