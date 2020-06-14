import { CommonService } from './../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from 'src/app/entidades/Domicilio';

@Injectable({
  providedIn: 'root',
})
export class DomicilioService extends CommonService<Domicilio> {
  _url = 'http://localhost:8080/api/domicilio/';

  constructor(http: HttpClient) {
    super(http);
  }
}
