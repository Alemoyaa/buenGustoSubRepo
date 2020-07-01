import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { DetalleManufacturado } from './../../../entidades/DetalleManufacturado';
import { DetalleManufacturadoService } from './../../../services/serviciosCliente/detalleManufacturadoServices/detalle-manufacturado.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css'],
})
export class CatalogoDetalleComponent implements OnInit {
  articulo: ArticuloManufacturado;
  articuloManuf: ArticuloManufacturado;
  id: number;

  detalle: DetalleManufacturado = {
    articuloInsumoID: null,
    cantidad: null,
    id: null,
    unidadMedidaID: null,
  };

  constructor(
    private articuloService: ArticuloManufacturadoService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private articuloManufService: ArticuloManufacturadoService
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
    this.getManuf(id);
  }

  addToCart(articulo: ArticuloManufacturado) {
    let string = localStorage.getItem('carritoDetallesPedido');
    let json = JSON.parse(string);

    json.push({
      cantidad: 1,
      subtotal: articulo.precio_de_venta,
      aclaracion: '',
      esInsumo: false,
      articuloManufacturado: articulo,
    });

    localStorage.setItem('carritoDetallesPedido', JSON.stringify(json));
    console.log(localStorage.getItem('carritoDetallesPedido'));
    this.router.navigate(['carrito']);
  }

  getManuf(id) {
    this.articuloManufService.getOne(id).subscribe((data) => {
      this.articuloManuf = data;
      console.log('manuf', data);
    });
  }
}
