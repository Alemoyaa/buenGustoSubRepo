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

  aclaracion: String;

  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService,
    private pedidoService: PedidoServices,
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
      console.log(error);
    }
  }

  pagar() {
    this.loginService.isAuth().subscribe((data) => {
      if (data) {
        this.crearPedido();
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
      //console.log('_-----------> ', data);
      await this.clienteService.getByUidFirebase(data.uid).subscribe(
        (user) => {
          this.pedido = new Pedido();
          if (!this.envio) {
            this.pedido.tipo_Envio = false;
          } else {
            this.pedido.tipo_Envio = true;
          }
          //console.log('--- user', user);
          //this.pedido.clientePedido = new Cliente();
          this.pedido.estadoPedido = new EstadoPedido();
          this.pedido.estadoPedido.id = 1;

          this.pedido.clientePedido = user;
          this.pedido.fechaRealizacion = new Date();
          //this.pedido.hora_estimada_fin = new Date();

          this.pedido.lista_detallePedido = this.listaDetallePedido;

          console.log(this.pedido);
          this.pedidoService.post(this.pedido).subscribe((posted) => {
            console.log('posted', posted);
            this.alert.mensajeSuccess(
              'Realizado',
              'Su pedido fue realizado con exito'
            );
            this.router.navigate(['user-profile/' + data.uid]);
            localStorage.clear();
          });
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  setEnvio(envio) {
    if (envio === '0') {
      this.envio = false;
    } else {
      this.envio = true;
    }
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
