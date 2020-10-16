import { CommonService } from '../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localidad } from 'src/app/entidades/Localidad';

@Injectable({
  providedIn: 'root',
})
export class LocalidadService extends CommonService<Localidad> {
  _url = 'https://buengusto-backend.herokuapp.com/localidadEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
