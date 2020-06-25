import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CommonService<Entity> {
  protected _url: string;

  constructor(protected http: HttpClient) {}

  getAll(): Observable<Entity[]> {
    return this.http
      .get<Entity[]>(this._url)
      .pipe(catchError(this.handleError));
  }

  getOne(id: number): Observable<Entity> {
    return this.http
      .get<Entity>(this._url + id)
      .pipe(catchError(this.handleError));
  }

  post(entidad: Entity): Observable<Entity> {
    console.log("--------------",entidad);
    return this.http
      .post<Entity>(this._url, entidad)
      .pipe(catchError(this.handleError));

  }

  put(id: number, entidad: Entity): Observable<Entity> {
    return this.http
      .put<Entity>(this._url + id, entidad)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this._url + id).pipe(catchError(this.handleError));
  }

  public handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      //Error del lado del cliente
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      //error de backend
      errorMessage = `Backend returned: ${err.error.message}`;
    }

    Swal.fire({
      icon: 'error',
      title: 'Ups ...',
      text: '¡Algo salió mal!',
      showCloseButton: true,
      confirmButtonText: '¿Por qué tengo este problema?',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          `Code: ${err.status} (${err.error.error})`,
          errorMessage,
          'warning'
        );
      }
    });
    return throwError(errorMessage);
  }

}
