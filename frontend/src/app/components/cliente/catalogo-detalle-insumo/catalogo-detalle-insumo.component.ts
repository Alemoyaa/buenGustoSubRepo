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

  addToCart(articulo) {
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
    this.router.navigate(['carrito']);
  }
}
