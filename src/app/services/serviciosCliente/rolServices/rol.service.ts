import { Injectable } from '@angular/core';
import { Rol } from 'src/app/entidades/Rol';
import { CommonService } from '../commonServices/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService extends CommonService<Rol>{

  _url = 'https://buengusto-backend.herokuapp.com/rolEntities/';
 
  constructor(http: HttpClient) { super(http) }
}