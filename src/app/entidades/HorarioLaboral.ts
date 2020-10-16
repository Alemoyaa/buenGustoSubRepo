import { Common } from './Common';
import { Time } from '@angular/common';

export class HorarioLaboral extends Common {
  horario_inicio: Time;
  horario_fin: Time;
  nombre_dia: string;
}
