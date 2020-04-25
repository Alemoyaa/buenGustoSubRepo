import { Common } from './Common';
import { Cliente } from './Cliente';

export class Domicilio extends Common{
  calle: string;
  numero: number;
  localidad: string;
  clienteDomicilio: Cliente;
}
