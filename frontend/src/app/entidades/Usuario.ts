import { Common } from './Common';
import {Rol} from './Rol';
export class Usuario extends Common {
  email: string;
  rolID: Rol;
  uid_firebase: string;
}
