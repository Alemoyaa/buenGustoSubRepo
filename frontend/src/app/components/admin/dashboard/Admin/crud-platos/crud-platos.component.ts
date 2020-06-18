import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo-crud',
  templateUrl: './crud-platos.component.html',
  styleUrls: ['./crud-platos.component.css'],
})
export class CrudPlatosComponent implements OnInit {
  esEditar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  editar() {
    this.esEditar = true;
  }

  cerrar() {
    this.esEditar = false;
  }
}
