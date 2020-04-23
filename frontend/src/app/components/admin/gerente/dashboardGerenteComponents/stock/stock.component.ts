import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  esEditar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    this.esEditar = true;
  }

  cerrar(){
    this.esEditar = false;
  }

}
