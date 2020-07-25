import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonService } from './../commonServices/common.service';
import { Factura } from './../../../entidades/Factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacturaService extends CommonService<Factura> {
  _url = 'http://localhost:8080/api/factura/';

  constructor(http: HttpClient) {
    super(http);
  }

  postPDF(entidad: Factura): Observable<Factura> {
    return this.http
      .post<Factura>(this._url + 'pdf/', entidad)
      .pipe(catchError(this.handleError));
  }
}
