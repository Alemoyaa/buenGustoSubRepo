import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { DetallePedido } from 'src/app/entidades/DetallePedido';

@Injectable({
  providedIn: 'root',
})
export class DetallePedidoService extends CommonService<DetallePedido> {
  _url = 'https://buengusto-backend.herokuapp.com/detallePedidoEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
