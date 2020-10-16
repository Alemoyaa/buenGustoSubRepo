import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { DatosEmpresa } from 'src/app/entidades/DatosEmpresa';

@Injectable({
  providedIn: 'root',
})
export class DatosEmpresaService extends CommonService<DatosEmpresa> {
  _url = 'https://buengusto-backend.herokuapp.com/datosEmpresaEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
