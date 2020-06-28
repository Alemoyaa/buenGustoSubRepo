import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulosManufacturado: Array<ArticuloManufacturado> = [];
  articulosInsumo: Array<ArticuloInsumo> = [];

  constructor(
    public articulosManufacturadosService: ArticuloManufacturadoService,
    public articulosInsumoService: ArticuloInsumoService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getArticulos();
  }

  async getArticulos() {
    await this.articulosManufacturadosService.getAll().subscribe((data) => {
      this.articulosManufacturado = data;
    });
    await this.articulosInsumoService.getAll().subscribe((data) => {
      this.articulosInsumo = data;
    });
  }

  goToDetail(id, articulo) {
    if (articulo === 0) {
      this.router.navigate(['detalle-manufacturado/', id]);
    } else {
      this.router.navigate(['detalle-insumo/', id]);
    }
  }
}
