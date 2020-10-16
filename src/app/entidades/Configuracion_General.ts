import { Common } from './Common';
import { HorarioLaboral } from './HorarioLaboral';

export class Configuracion_General extends Common {
  cantidadCocineros: number;
  email: string;

  horarios: HorarioLaboral;
}
