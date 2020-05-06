import { Pedido } from './Pedido';
import { Estado } from './Estado';
import { Common } from './Common';

export class HistoricoEstado extends Common {
    fechaModificacion: Date;
    estado: Estado;
    pedido: Pedido;
}