import { Common } from './Common';

export class Pedido extends Common {
  clienteID: number;
  estadoPedido: number;
  fechaRealizacion: Date;
  hora_estimada_fin: any;
  lista_detallePedido: any;
  numero: number;
  tipo_envio: boolean;
}
