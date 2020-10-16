import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

@Injectable({
  providedIn: 'root',
})
export class ArticuloManufacturadoService extends CommonService<
  ArticuloManufacturado
> {
  _url = 'https://buengusto-backend.herokuapp.com/articuloManufacturadoEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
