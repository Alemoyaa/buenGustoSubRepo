import { CommonService } from './../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localidad } from 'src/app/entidades/Localidad';
import { Pais } from 'src/app/entidades/Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService extends CommonService<Pais> {
  _url = 'http://localhost:8080/api/pais/';

  constructor(http: HttpClient) {
    super(http);
  }
}
