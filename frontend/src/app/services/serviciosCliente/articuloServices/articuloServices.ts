import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { Articulo } from 'src/app/entidades/Articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloServices extends CommonService<Articulo> {
  _url = 'http://localhost:8080/api/articulo/';

  articulos: Articulo[] = [];

  constructor(http: HttpClient) {
    super(http);
  }
}
