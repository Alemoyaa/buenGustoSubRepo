import { CommonService } from './../commonServices/common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from 'src/app/entidades/Domicilio';

@Injectable({
  providedIn: 'root',
})
export class DomicilioService extends CommonService<Domicilio> {
  _url = 'https://buengusto-backend.herokuapp.com/domicilioEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
