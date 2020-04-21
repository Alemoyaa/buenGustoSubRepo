import { ArticuloManufacturadoService } from '../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

import { Component, OnInit } from '@angular/core';
import { DetallePedido } from '../../../entidades/DetallePedido';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  articulosManufacturados: ArticuloManufacturado[] = [];



  
  constructor(public service: ArticuloManufacturadoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    await this.service.getAll().subscribe((data) => {
      this.articulosManufacturados = data;
      console.log(this.articulosManufacturados);
    });
  }

}
