import { Common } from './Common';
import { Domicilio } from './Domicilio';

export class DatosEmpresa extends Common {
  domicilio: Domicilio;
  email: string;
  propietario: string;
  razonSocial: string;
  telefono: number;
}
