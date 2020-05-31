import { ArticuloManufacturadoService } from '../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulosManufacturados: ArticuloManufacturado[] = [];
  pizzas: Array<ArticuloManufacturado> = [];
  lomos: Array<ArticuloManufacturado> = [];
  bebidas: Array<ArticuloManufacturado> = [];

  articuloManufacturado: ArticuloManufacturado = {
    id: null,
    denominacion: null,
    precioVenta: null,
    precioCompra: null,
    _urlImagen: null,
    fechaBaja: null,
    tiempoEstimadoCocina: null,
    subcategoriaAM: null,
    receta: null,
  };

  constructor(public articulosService: ArticuloManufacturadoService) {}

  ngOnInit(): void {
    // this.getAll();
  }

  getArticulos() {
    this.articulosService.getAll().subscribe((data) => {
      this.articulosManufacturados = data;
    });
  }
}
