import { LoginService } from './../../../services/loginServices/login.service';
import { DetallePedido } from 'src/app/entidades/DetallePedido';
import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css'],
})
export class CatalogoDetalleComponent implements OnInit {
  articuloManuf: ArticuloManufacturado;
  id: number;

  mostrarBotonardo: boolean = false;

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private articuloManufService: ArticuloManufacturadoService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.isAuth().subscribe((dataLogin) => {
      if (dataLogin) this.mostrarBotonardo = true;
      else this.mostrarBotonardo = false;
    });
    this.routerActive.params.subscribe((data) => {
      this.id = data.id;
      this.getManuf(data.id);
    });
  }

  async getManuf(id) {
    await this.articuloManufService.getOne(id).subscribe((data) => {
      this.articuloManuf = data;
      console.log('manuf', data);
    });
  }

  agregarLocalStorage(articulo: ArticuloManufacturado) {
    let detallePedidoAntiguos: DetallePedido[] = this.getDetallePedidoEnStorage;

    if (!(detallePedidoAntiguos instanceof Array)) {
      detallePedidoAntiguos = new Array<DetallePedido>();
      detallePedidoAntiguos.push({
        id: 0,
        cantidad: 1,
        subtotal: articulo.precio_de_venta,
        aclaracion: '',
        esInsumo: false,
        articuloManufacturado: articulo,
      });
    } else {
      detallePedidoAntiguos.push({
        id: 0,
        cantidad: 1,
        subtotal: articulo.precio_de_venta,
        aclaracion: '',
        esInsumo: false,
        articuloManufacturado: articulo,
      });
    }

    localStorage.setItem(
      'carritoDetallesPedido',
      JSON.stringify(detallePedidoAntiguos)
    );
    this.router.navigate(['carrito']);
  }

  get getDetallePedidoEnStorage(): DetallePedido[] {
    const detallePedidoStorage: DetallePedido[] = JSON.parse(
      localStorage.getItem('carritoDetallesPedido')
    );

    if (detallePedidoStorage == null) {
      return new Array<DetallePedido>();
    }
    return detallePedidoStorage;
  }
}
