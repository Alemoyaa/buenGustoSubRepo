import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../entidades/Usuario';
import { Injectable } from '@angular/core';
import { CommonService } from '../commonServices/common.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServices extends CommonService<Usuario> {
  _url = 'http://localhost:8080/api/usuario/';

  constructor(http: HttpClient) {
    super(http);
  }
}
