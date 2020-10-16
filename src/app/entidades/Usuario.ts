import { Rol } from 'src/app/entidades/Rol';
import { Common } from './Common';
export class Usuario extends Common {
  email: string;
  uid_firebase: string;
  rol: Rol;
}
