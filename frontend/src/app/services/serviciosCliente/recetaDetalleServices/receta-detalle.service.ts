import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { RecetaDetalle } from './../../../entidades/RecetaDetalle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetaDetalleService extends CommonService<RecetaDetalle>{

  _url = 'http://localhost:8080/api/receta_detalle/';

  constructor(http: HttpClient) { super(http) }


}
