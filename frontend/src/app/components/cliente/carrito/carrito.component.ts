import { NgForm } from '@angular/forms';
import { FacturaService } from './../../../services/serviciosCliente/facturaServices/factura.service';
import { Domicilio } from './../../../entidades/Domicilio';
import { Factura } from './../../../entidades/Factura';
import { Observable } from 'rxjs';
import { AlertsService } from './../../../services/alertServices/alerts.service';
import { DetallePedido } from 'src/app/entidades/DetallePedido';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/entidades/Pedido';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { PedidoServices } from 'src/app/services/serviciosCliente/pedidoServices/pedido.service';
import { EstadoPedido } from 'src/app/entidades/EstadoPedido';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Router } from '@angular/router';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  listaDetallePedido: DetallePedido[] = [];
  factura: Factura = new Factura();

  aclaracion: String;

  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService,
    private pedidoService: PedidoServices,
    private facturaService: FacturaService,
    private router: Router,
    private alert: AlertsService
  ) {
    this.getArticulos();
  }

  pedido: Pedido = {
    clientePedido: null,
    minutosTotal: null,
    totalPedido: null,
    habilitado: null,
    estadoPedido: null,
    fechaRealizacion: null,
    numero: null,
    hora_estimada_fin: null,
    id: null,
    lista_detallePedido: null,
    tipo_Envio: null,
  };

  ngOnInit() {}

  articulosManufactura: Array<ArticuloManufacturado> = [];
  articulosInsumo: Array<ArticuloInsumo> = [];

  total = 0;
  otroMedioDePago = false;
  envio = false;

  deleteArticulo(index: number) {
    let detallePedidoStorage = JSON.parse(
      localStorage.getItem('carritoDetallesPedido')
    );
    let newJson: Array<DetallePedido> = [];

    for (let iterador = 0; iterador < detallePedidoStorage.length; iterador++) {
      if (iterador === index) {
        console.log(
          'Index: ',
          index,
          'Iterador: ',
          iterador,
          ' -> item ->',
          detallePedidoStorage[iterador]
        );
      } else {
        console.log('Pushh ->', detallePedidoStorage[iterador]);
        newJson.push(detallePedidoStorage[iterador]);
      }
    }

    let newJsonString = JSON.stringify(newJson);
    localStorage.setItem('carritoDetallesPedido', newJsonString);
    this.listaDetallePedido = [];
    this.getArticulos();
  }

  reducirArticulo(iterador: number) {
    if (this.listaDetallePedido[iterador].cantidad === 1) {
      alert('Si desea eliminar el articulo, seleccione la esquina izquierda');
    } else {
      this.listaDetallePedido[iterador].cantidad--;

      if (this.listaDetallePedido[iterador].articuloInsumo) {
        this.listaDetallePedido[iterador].subtotal -= this.listaDetallePedido[
          iterador
        ].articuloInsumo.precio_de_venta;
      } else {
        this.listaDetallePedido[iterador].subtotal -= this.listaDetallePedido[
          iterador
        ].articuloManufacturado.precio_de_venta;
      }

      let newJsonString = JSON.stringify(this.listaDetallePedido);
      localStorage.setItem('carritoDetallesPedido', newJsonString);
    }
    this.getTotal();
  }

  addArticulo(iterador: number) {
    if (this.listaDetallePedido[iterador].articuloInsumo) {
      this.listaDetallePedido[iterador].cantidad++;
      this.listaDetallePedido[iterador].subtotal += this.listaDetallePedido[
        iterador
      ].articuloInsumo.precio_de_venta;
    } else {
      this.listaDetallePedido[iterador].cantidad++;
      this.listaDetallePedido[iterador].subtotal += this.listaDetallePedido[
        iterador
      ].articuloManufacturado.precio_de_venta;
    }

    let newJsonString = JSON.stringify(this.listaDetallePedido);
    localStorage.setItem('carritoDetallesPedido', newJsonString);

    this.getTotal();
  }

  getArticulos() {
    let detallesPedidoStorage = localStorage.getItem('carritoDetallesPedido');
    let detallesPedido = JSON.parse(detallesPedidoStorage);
    console.log(detallesPedido);
    this.listaDetallePedido = detallesPedido;

    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    try {
      this.listaDetallePedido.forEach((detallePedidoItem) => {
        this.total += detallePedidoItem.subtotal;
      });
    } catch (error) {
      console.log('No existen articulos seleccionados');
    }
  }

  get numeroValido(): boolean {
    var expresion = /[a-z]|[A-Z]/g;

    if (this.factura.nroTarjeta) {
      let encontrado = this.factura.nroTarjeta.match(expresion);
      if (encontrado != null) {
        return false;
      } else {
        if (
          this.factura.nroTarjeta.length <= 19 &&
          this.factura.nroTarjeta.length >= 16
        ) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  pagar() {
    console.log('poraca');
    this.loginService.isAuth().subscribe((data) => {
      if (data) {
        this.crearPedido();
        console.log('asdas');
      } else {
        this.alert.mensajeWarning(
          'No inicio sesion',
          'Debe registrarse para poder comprar'
        );
        this.router.navigate(['/login']);
      }
    });
  }

  async crearPedido() {
    this.getTotal();
    await this.loginService.isAuth().subscribe(async (data) => {
      await this.clienteService.getByUidFirebase(data.uid).subscribe(
        (user) => {
          this.pedido = new Pedido();

          this.pedido.tipo_Envio = this.envio;

          this.pedido.estadoPedido = new EstadoPedido();
          this.pedido.estadoPedido.id = 1;

          this.pedido.clientePedido = user;
          this.pedido.fechaRealizacion = new Date();
          //this.pedido.hora_estimada_fin = new Date();

          this.pedido.lista_detallePedido = this.listaDetallePedido;

          this.factura.fecha = new Date();

          if (this.envio || !this.otroMedioDePago) {
            this.factura.formaPago = 'Efectivo';
            this.factura.montoDescuento = (this.total / 100) * 10;
          }

          this.factura.tipoFactura = 'C';
          this.factura.totalFactura = this.total;

          this.factura.pedidofacturado = this.pedido;

          console.log(this.factura);
          console.log(this.pedido);

          // 4 Cocineros

          this.pedidoService
            .postConHoraFin(4, this.pedido)
            .subscribe((posted) => {
              this.factura.pedidofacturado = posted;
              console.log('posted', posted);
              console.log(this.factura);
              this.facturaService.post(this.factura).subscribe(
                (Factura) => {
                  console.log('Factura', Factura);
                  this.alert.mensajeSuccess(
                    'Realizado',
                    'Su pedido fue realizado con exito'
                  );
                  this.router.navigate(['user-profile/' + data.uid]);
                  localStorage.clear();
                },
                (err) => {
                  console.error(err);
                }
              );
            });
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  setPago(pago) {
    if (pago === '0') {
      this.otroMedioDePago = false;
    } else {
      this.otroMedioDePago = true;
    }
  }

  get checkearHorario(): boolean {
    var diayHoraActual = new Date();
    var horaActual = diayHoraActual.getHours();
    var minutoActual = diayHoraActual.getMinutes();
    var segundoActual = diayHoraActual.getSeconds();
    var dia = new Array(7);
    dia[0] = 'Domingo';
    dia[1] = 'Lunes';
    dia[2] = 'Martes';
    dia[3] = 'Miercoles';
    dia[4] = 'Jueves';
    dia[5] = 'Viernes';
    dia[6] = 'Sabado';
    var nombredia = dia[diayHoraActual.getDay()];

    // console.log(diayHoraActual);
    // console.log(horaActual);
    // console.log(minutoActual);
    // console.log(segundoActual);
    // console.log(nombredia);

    if (
      (nombredia = 'Sabado' || 'Domingo') &&
      horaActual >= 11 &&
      horaActual < 15
    ) {
      return true;
    } else if (horaActual > 20 && horaActual <= 23) {
      return true;
    } else {
      return true;
    }
  }
}
