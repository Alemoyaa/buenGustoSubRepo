import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { EstadoPedido } from 'src/app/entidades/EstadoPedido';

@Injectable({
  providedIn: 'root',
})
export class EstadoPedidoServices extends CommonService<EstadoPedido> {
  _url = 'http://localhost:8080/api/estado_pedido/';

  constructor(http: HttpClient) {
    super(http);
  }
}
