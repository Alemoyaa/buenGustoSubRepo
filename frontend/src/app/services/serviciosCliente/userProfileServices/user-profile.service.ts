import { HttpClient } from '@angular/common/http';
import { Cliente } from './../../../entidades/Cliente';
import { Injectable } from '@angular/core';
import { CommonService } from '../commonServices/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends CommonService<Cliente> {

  _url = 'http://localhost:8080/api/cliente/';

  constructor(http:HttpClient) {
    super(http);
  }

}