import { UnidadMedida } from 'src/app/entidades/UnidadMedida';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
@Injectable({
  providedIn: 'root'
})
export class RubroGeneralService extends CommonService<UnidadMedida> {

  _url = 'http://localhost:8080/api/rubro_general/';
  constructor(http: HttpClient) {
    super(http);
  }
}
