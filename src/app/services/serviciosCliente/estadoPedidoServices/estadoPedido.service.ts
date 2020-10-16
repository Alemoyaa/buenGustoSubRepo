import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { EstadoPedido } from 'src/app/entidades/EstadoPedido';

@Injectable({
  providedIn: 'root',
})
export class EstadoPedidoServices extends CommonService<EstadoPedido> {
  _url = 'https://buengusto-backend.herokuapp.com/estadoPedidoEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
