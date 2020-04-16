import { Factura } from './Factura';
import { Cliente } from './Cliente';
import { Common } from './Common';

export class Pedido extends Common{
  fecha: Date;
  numero: number;
  estado: number;
  horaEstimadaFin: Date;
  tipoEnvio: number;
  cliente: Cliente;
  factura: Factura;
}
