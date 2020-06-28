import { Common } from './Common';
import { DatosEmpresa } from './DatosEmpresa';
import { Pedido } from './Pedido';
import { DetallePedido } from './DetallePedido';

export class Factura extends Common {
  fecha: Date;
  nroFactura: number;
  montoDescuento: number;
  totalFactura: number;
  formaPago: string;
  tipoFactura: string;
  nroTarjeta: string;

  detalleFactura: DetallePedido[];
  pedidofacturado: Pedido;
  datosEmpresaID: DatosEmpresa;
}
