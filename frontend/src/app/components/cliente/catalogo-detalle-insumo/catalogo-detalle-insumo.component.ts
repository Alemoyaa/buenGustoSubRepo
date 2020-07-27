import { LoginService } from './../../../services/loginServices/login.service';
import { DetallePedido } from './../../../entidades/DetallePedido';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';

@Component({
  selector: 'app-catalogo-detalle-insumo',
  templateUrl: './catalogo-detalle-insumo.component.html',
  styleUrls: ['./catalogo-detalle-insumo.component.css'],
})
export class CatalogoDetalleInsumoComponent implements OnInit {
  articulo: ArticuloInsumo;
  id: number;
  mostrarBotonardo: boolean = false;

  constructor(
    private articuloService: ArticuloInsumoService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.isAuth().subscribe((dataLogin) => {
      if (dataLogin) this.mostrarBotonardo = true;
      else this.mostrarBotonardo = false;
    });
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

  agregarLocalStorage(articulo: ArticuloInsumo) {
    let detallePedidoAntiguos: DetallePedido[] = this.getDetallePedidoEnStorage;

    if (!(detallePedidoAntiguos instanceof Array)) {
      detallePedidoAntiguos = new Array<DetallePedido>();
      detallePedidoAntiguos.push({
        id: 0,
        cantidad: 1,
        subtotal: articulo.precio_de_venta,
        aclaracion: '',
        esInsumo: true,
        articuloInsumo: articulo,
      });
    } else {
      detallePedidoAntiguos.push({
        id: 0,
        cantidad: 1,
        subtotal: articulo.precio_de_venta,
        aclaracion: '',
        esInsumo: true,
        articuloInsumo: articulo,
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
