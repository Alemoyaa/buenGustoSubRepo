import { FormaPago } from './FormaPago';
import { Pedido } from './Pedido';
import { Common } from './Common';

export class Factura extends Common {
  numero: number;
  fecha: Date;
  total: number;
  formaPago: FormaPago;
  pedido: Pedido;
}
