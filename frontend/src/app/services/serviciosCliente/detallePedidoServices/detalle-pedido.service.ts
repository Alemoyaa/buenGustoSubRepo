import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/DetallePedido';

@Injectable({
  providedIn: 'root',
})
export class DetallePedidoService extends CommonService<DetallePedido> {
  _url = 'http://localhost:8080/api/detalle_pedido/';

  constructor(http: HttpClient) {
    super(http);
  }
}
