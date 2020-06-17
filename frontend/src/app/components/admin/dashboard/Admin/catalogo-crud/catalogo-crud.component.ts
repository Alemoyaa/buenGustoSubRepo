import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo-crud',
  templateUrl: './catalogo-crud.component.html',
  styleUrls: ['./catalogo-crud.component.css'],
})
export class CatalogoCrudComponent implements OnInit {
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
