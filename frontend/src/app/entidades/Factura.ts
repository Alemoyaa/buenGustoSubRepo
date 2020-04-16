import { Common } from './Common';

export class Factura extends Common{
  fecha: Date;
  numero: number;
  montoDescuento: number;
  total: number;
  formaPago: string;
  nroTarjeta: string;
}
