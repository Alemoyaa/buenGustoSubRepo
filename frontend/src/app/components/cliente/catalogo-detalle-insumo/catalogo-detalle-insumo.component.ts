import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { DetalleManufacturado } from './../../../entidades/DetalleManufacturado';
import { DetalleManufacturadoService } from './../../../services/serviciosCliente/detalleManufacturadoServices/detalle-manufacturado.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

@Component({
  selector: 'app-catalogo-detalle-insumo',
  templateUrl: './catalogo-detalle-insumo.component.html',
  styleUrls: ['./catalogo-detalle-insumo.component.css'],
})
export class CatalogoDetalleInsumoComponent implements OnInit {
  articulo: ArticuloInsumo;
  articuloManuf: ArticuloInsumo;
  id: number;

  constructor(
    private articuloService: ArticuloInsumoService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerActive.params.subscribe((data) => {
      this.id = data.id;
      this.getOne(data.id);
      console.log(data);
    });
  }

  async getOne(id: number) {
    await this.articuloService.getOne(id).subscribe((data) => {
      console.log(data);
      this.articulo = data;
    });
  }

  addToCart(articulo: ArticuloInsumo) {
    let string = localStorage.getItem('carritoInsumo');
    let json = JSON.parse(string);
    json.push({
      id: articulo.id,
      denominacion: articulo.denominacion,
      precio_de_venta: articulo.precio_de_venta,
      precio_de_compra: articulo.precio_de_compra,
      stock_actual: articulo.stock_actual,
      stock_minimo: articulo.stock_minimo,
      stock_maximo: articulo.stock_maximo,
      requiere_refrigeracion: articulo.requiere_refrigeracion,
      es_catalogo: articulo.es_catalogo,
      url_imagen: articulo.url_imagen,
      unidadMedidaID: articulo.unidadMedidaID,
      categoria: articulo.categoria,
    });
    localStorage.setItem('carritoInsumo', JSON.stringify(json));
    console.log(
      'localStorage CarritoInsumo ->',
      localStorage.getItem('carritoInsumo')
    );
    this.router.navigate(['carrito']);
  }
}
