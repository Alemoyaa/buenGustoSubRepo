import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService<Entity> {

  protected _url:string;

  constructor(private http:HttpClient) {
  }

  getAll() : Observable<Entity[]>{
    return this.http.get<Entity[]>(this._url);
  }

  getOne(id:number) : Observable<Entity>{
    return this.http.get<Entity>(this._url+id);
  }

  post(entidad:Entity) : Observable<Entity>{
    return this.http.post<Entity>(this._url, entidad);
  }

  put(id:number, entidad:Entity) : Observable<Entity>{
    return this.http.put<Entity>(this._url+id, entidad);
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(this._url+id);
  }

}
