import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonServices/common.service';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/entidades/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService extends CommonService<Categoria> {
  _url = 'https://buengusto-backend.herokuapp.com/categoriaEntities/';

  constructor(http: HttpClient) {
    super(http);
  }
}
