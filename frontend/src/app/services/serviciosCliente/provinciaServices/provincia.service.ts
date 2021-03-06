import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/entidades/Provincia';

@Injectable({
  providedIn: 'root',
})
export class ProvinciaServices extends CommonService<Provincia> {
  _url = 'http://localhost:8080/api/provincia/';

  constructor(http: HttpClient) {
    super(http);
  }
}
