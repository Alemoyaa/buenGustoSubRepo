import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { DetalleManufacturado } from 'src/app/entidades/DetalleManufacturado';

@Injectable({
  providedIn: 'root',
})
export class DetalleManufacturadoService extends CommonService<
  DetalleManufacturado
> {
  _url = 'http://localhost:8080/api/detalle_manufacturado/';

  constructor(http: HttpClient) {
    super(http);
  }
}
