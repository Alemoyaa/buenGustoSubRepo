import { Common } from './Common';

export class Pedido extends Common{
  fecha: number;
  numero: number;
  estado: number;
  tipoEnvio: number;
  horaEstimadaFin: Date;
}
