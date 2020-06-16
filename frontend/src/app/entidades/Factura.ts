import { Common } from './Common';
import {DatosEmpresa} from './DatosEmpresa';
import {Pedido} from './Pedido';
import {DetalleFactura} from './DetalleFactura';

export class Factura extends Common {
  fecha: Date;
  formaPago: string;
  tipoFactura: string;
  nroFactura: number;
  precioTotal: number;
  pedidoID: Pedido;
  lista_detalleFactura: DetalleFactura[];
  datosEmpresaID: DatosEmpresa;
}
