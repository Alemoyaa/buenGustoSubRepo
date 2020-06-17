import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../commonServices/common.service';
import { UnidadMedida } from 'src/app/entidades/UnidadMedida';

@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService extends CommonService<UnidadMedida> {
  _url = 'http://localhost:8080/api/unidad_medida/';

  constructor(http: HttpClient) {
    super(http);
  }
}
