import { Common } from './Common';
import { Domicilio } from './Domicilio';

export class DatosEmpresa extends Common {
  propietario: string;
  razonSocial: string;
  telefono: number;

  domicilio: Domicilio;
}
