import { HttpClient } from '@angular/common/http';
import { Pedido } from '../../../entidades/Pedido';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PedidoServices extends CommonService<Pedido> {
  _url = 'http://localhost:8080/api/pedido/';

  constructor(http: HttpClient) {
    super(http);
  }
}
