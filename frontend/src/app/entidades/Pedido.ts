import { Common } from './Common';
import { DetallePedido } from './DetallePedido';
import { EstadoPedido } from './EstadoPedido';
import { Cliente } from './Cliente';

export class Pedido extends Common {
  fechaRealizacion: Date;
  hora_estimada_fin: Date;
  tipo_Envio: boolean;
  numero: number;

  totalPedido: number;
  minutosTotal: number;

  lista_detallePedido: DetallePedido[];
  estadoPedido: EstadoPedido;
  ClientePedido: Cliente;
}
