import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';
import { HorarioLaboral } from 'src/app/entidades/HorarioLaboral';

@Injectable({
  providedIn: 'root',
})
export class HorarioLaboralService extends CommonService<HorarioLaboral> {
  _url = 'https://buengusto-backend.herokuapp.com/pedidoEntities/';

  constructor(http: HttpClient) {
    super(http);
  }

  getPedidosEntreDosFechas(nombredia: String): Observable<HorarioLaboral> {
    return this.http
      .get<HorarioLaboral>(this._url + 'dia/' + nombredia)
      .pipe(catchError(this.handleError));
  }
}
