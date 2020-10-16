import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { Configuracion_General } from 'src/app/entidades/Configuracion_General';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionGeneralServices extends CommonService<
  Configuracion_General
> {
  _url = 'https://buengusto-backend.herokuapp.com/configuracionGeneralEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
