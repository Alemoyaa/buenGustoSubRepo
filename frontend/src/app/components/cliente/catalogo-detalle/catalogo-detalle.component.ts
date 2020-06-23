import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { DetalleManufacturado } from './../../../entidades/DetalleManufacturado';
import { DetalleManufacturadoService } from './../../../services/serviciosCliente/detalleManufacturadoServices/detalle-manufacturado.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloServices } from 'src/app/services/serviciosCliente/articuloServices/articuloServices';
import { Articulo } from 'src/app/entidades/Articulo';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css'],
})
export class CatalogoDetalleComponent implements OnInit {
  articulo: Articulo;
  id: number;

  constructor(
    private articuloService: ArticuloServices,
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
    let string = localStorage.getItem('carrito');
    let json = JSON.parse(string);
    json.push({
      id: articulo.id,
      denominacion: articulo.denominacion,
      precio_de_venta: articulo.precio_de_venta,
      url_imagen: articulo.url_imagen,
    });
    localStorage.setItem('carrito', JSON.stringify(json));
    console.log(localStorage.getItem('carrito'));
    this.router.navigate(['carrito']);
  }
}
