import { ArticuloServices } from '../../../services/serviciosCliente/articuloServices/articuloServices';
import { Articulo } from 'src/app/entidades/Articulo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulos: Array<Articulo> = [];

  articulo: Articulo;

  constructor(
    public articulosService: ArticuloServices,
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
