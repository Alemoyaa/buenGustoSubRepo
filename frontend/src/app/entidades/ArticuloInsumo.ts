import { Common } from './Common';

export class ArticuloInsumo extends Common{
  denominacion: string;
  precioCompra: number;
  precioVenta: number;
  stockActual: number;
  stockMinimo: number;
  unidadMedida: string;
  esInsumo: boolean;
}
