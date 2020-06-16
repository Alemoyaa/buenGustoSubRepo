import { Common } from './Common';
import { DatosEmpresa } from './DatosEmpresa';
import { Pedido } from './Pedido';
import { DetalleFactura } from './DetalleFactura';

export class Factura extends Common {
  fecha: Date;
  formaPago: string;
  tipoFactura: string;
  nroFactura: number;
  precioTotal: number;
  pedidofacturado: Pedido;
  detalleFactura: DetalleFactura[];
  datosEmpresaID: DatosEmpresa;
}
