import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/entidades/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CommonService<Usuario>{

  _url = 'http://localhost:8080/api/cliente/';

  constructor(http: HttpClient) { super(http) }

  getByUidFirebase(uid: string): Observable<Usuario> {
    return this.http.get<Usuario>(this._url + 'firebase/' + uid);
  }

}
