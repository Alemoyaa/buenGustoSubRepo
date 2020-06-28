import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { rejects } from 'assert';
import { ClienteService } from '../services/serviciosCliente/clienteServices/cliente.service';

@Injectable({
  providedIn: 'root',
})
export class CocineroGuard implements CanActivate {
  constructor(
    private logService: LoginService,
    private router: Router,
    private clienteService: ClienteService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      this.logService.isAuth().subscribe((data) => {
        this.clienteService.getByUidFirebase(data.uid).subscribe((user) => {
          if (user.usuario.rol.id === 3 || user.usuario.rol.id === 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    });
  }
}
