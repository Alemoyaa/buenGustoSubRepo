import { CommonService } from './../commonServices/common.service';
import { Factura } from './../../../entidades/Factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends CommonService<Factura>{

  _url = 'http://localhost:8080/api/factura/';

  constructor(http: HttpClient) { super(http) }
}
