import { Estado } from './Estado';
import { Usuario } from 'src/app/entidades/Usuario';
import { Common } from './Common';

export class Pedido extends Common {
  fecha: Date;
  numero: number;
  estadoActual: Estado;
  horaEstimadaFin: Date;
  tipoEnvio: number;
  usuario: Usuario;
}
