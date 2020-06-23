import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-platos',
  templateUrl: './form-platos.component.html',
  styleUrls: ['./form-platos.component.css'],
})
export class FormPlatosComponent implements OnInit {
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
