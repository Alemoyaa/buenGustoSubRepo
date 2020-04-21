import { ArticuloManufacturadoDetalle } from './../../../entidades/ArticuloManufacturadoDetalle';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloManufacturadoDetalleService extends CommonService<ArticuloManufacturadoDetalle> {
  _url = 'http://localhost:8080/api/articulo_manufacturado_detalle/';

  constructor(http:HttpClient) {
    super(http);
  }

}
