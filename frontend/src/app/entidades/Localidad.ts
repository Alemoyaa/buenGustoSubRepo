import { Common } from './Common';
import { Provincia } from './Provincia';

export class Localidad extends Common {
  nombre: string;
  provincia: Provincia;
}
