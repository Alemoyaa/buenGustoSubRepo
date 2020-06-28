import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulos: Array<ArticuloManufacturado> = [];

  articulo: ArticuloManufacturado;

  constructor(
    public articulosService: ArticuloManufacturadoService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getArticulos();
  }

  async getArticulos() {
    await this.articulosService.getAll().subscribe((data) => {
      console.log(data);
      this.articulos = data;
      console.log(this.articulos);
    });
  }

  goToDetail(id) {
    this.router.navigate(['catalogo-detalle/', id]);
  }
}
