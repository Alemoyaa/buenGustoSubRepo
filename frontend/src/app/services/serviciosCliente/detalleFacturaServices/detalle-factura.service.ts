import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetalleFactura extends CommonService<DetalleFactura> {
  _url = 'http://localhost:8080/api/detalle_factura/';

  constructor(http: HttpClient) {
    super(http);
  }
}
