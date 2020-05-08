import { HttpClient } from '@angular/common/http';
import { CategoriaAM } from './../../../entidades/CategoriaAM';
import { CommonService } from './../commonServices/common.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaAMService extends CommonService<CategoriaAM>{

  _url = 'http://localhost:8080/api/categoria_am/';

  constructor(http: HttpClient) { super(http) }

}
