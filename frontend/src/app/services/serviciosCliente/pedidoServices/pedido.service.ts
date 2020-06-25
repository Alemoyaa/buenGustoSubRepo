import { EstadoPedido } from './../../../../../../box/EntidadesNuevas/EstadoPedido';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  getPedidosEntreDosFechas(desde: Date, hasta: Date): Observable<Pedido[]> {
    return this.http
      .get<Pedido[]>(this._url + desde + '/' + hasta)
      .pipe(catchError(this.handleError));
  }

  getEstadoPedido(id: number, estado: EstadoPedido): Observable<Pedido> {
    return this.http
      .put<Pedido>(this._url + 'cambiar_estado/' + id, estado)
      .pipe(catchError(this.handleError));
  }
}
