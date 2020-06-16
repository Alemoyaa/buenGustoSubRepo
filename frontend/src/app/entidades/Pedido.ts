import { Common } from './Common';
import { DetallePedido } from './DetallePedido';
import { EstadoPedido } from './EstadoPedido';
import { Cliente } from './Cliente';

export class Pedido extends Common {
  fechaRealizacion: Date;
  hora_estimada_fin: any;
  numero: number;
  tipo_Envio: boolean;
  lista_detallePedido: DetallePedido[];
  estadoPedido: EstadoPedido;
  clientePedido: Cliente;
}
