import { CommonService } from './../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from 'src/app/entidades/Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService extends CommonService<Pais> {
  _url = 'https://buengusto-backend.herokuapp.com/paisEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
