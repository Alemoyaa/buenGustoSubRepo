import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends CommonService<ArticuloManufacturado>{

  _url = 'http://localhost:8080/api/articulo_manufacturado/';

  constructor(http: HttpClient) {
    super(http);
  }
}
