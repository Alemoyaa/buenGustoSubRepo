import { Common } from './Common';
import { Localidad } from './Localidad';

export class Domicilio extends Common {
  calle: string;
  numero: number;
  piso: number;
  nroDepartamento: number;
  aclaracion: string;
  localidad: Localidad;
}
