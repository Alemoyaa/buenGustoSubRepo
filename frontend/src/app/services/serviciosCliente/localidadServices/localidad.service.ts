import { CommonService } from '../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localidad } from 'src/app/entidades/Localidad';

@Injectable({
  providedIn: 'root',
})
export class LocalidadService extends CommonService<Localidad> {
  _url = 'http://localhost:8080/api/localidad/';

  constructor(http: HttpClient) {
    super(http);
  }
}
