import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../commonServices/common.service';
import { UnidadMedida } from 'src/app/entidades/UnidadMedida';

@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService extends CommonService<UnidadMedida> {
  _url = 'https://buengusto-backend.herokuapp.com/unidadMedidaEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
