import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService<Entity> {

  protected _url:string;

  constructor(protected http:HttpClient) {
  }

  getAll() : Observable<Entity[]>{
    return this.http.get<Entity[]>(this._url)
    .pipe(catchError(this.handleError));
  }

  getOne(id:number) : Observable<Entity>{
    return this.http.get<Entity>(this._url+id)
    .pipe(catchError(this.handleError));
  }

  post(entidad:Entity) : Observable<Entity>{
    return this.http.post<Entity>(this._url, entidad)
    .pipe(catchError(this.handleError));
  }

  put(id:number, entidad:Entity) : Observable<Entity>{
    return this.http.put<Entity>(this._url+id, entidad)
    .pipe(catchError(this.handleError));
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(this._url+id)
    .pipe(catchError(this.handleError));
  }


  handleError(error) {
    let errorMessage = 'Error manejado';
    if (error.error instanceof ErrorEvent) {

      //error de cliente
      errorMessage = `Error: ${error.error.mensage}`;

    } else {

      //error de server
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nError de Servidor`;
    }

    alert(errorMessage);
    return throwError(errorMessage);

  }

}
