import { Common } from './Common';

export class Factura extends Common {
  datosEmpresaID: number;
  fecha: Date;
  formaPago: string;
  lista_detalleFactura: any;
  nroFactura: number;
  pedidoID: number;
  precioTotal: number;
  tipoFactura: string;
}
