import { Cliente } from 'src/app/entidades/Cliente';
import { DetallePedido } from 'src/app/entidades/DetallePedido';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/entidades/Pedido';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { PedidoServices } from 'src/app/services/serviciosCliente/pedidoServices/pedido.service';
import { EstadoPedido } from 'src/app/entidades/EstadoPedido';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Router } from '@angular/router';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
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
    private articuloManufacturadoService: ArticuloManufacturadoService,
    private articuloInsumoService: ArticuloInsumoService
  ) {}

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

  ngOnInit() {
    this.getArticulos();
  }

  articulosManufactura: Array<ArticuloManufacturado> = [];
  articulosInsumo: Array<ArticuloInsumo> = [];

  total = 0;
  otroMedioDePago = false;
  envio = false;

  deleteArticulo(iterador /*, esManuf*/) {
    //if (esManuf) {
    console.log('Quitando');
    if (this.listaDetallePedido[iterador].cantidad === 1) {
      alert('Si desea eliminar el articulo, seleccione la esquina izquierda');
    } else {
      this.listaDetallePedido[iterador].cantidad--;
      console.log(this.listaDetallePedido[iterador].cantidad);

      let newJsonString = JSON.stringify(this.listaDetallePedido);
      localStorage.setItem('carritoDetallesPedido', newJsonString);
    }

    /*if (esManuf) {
      let articulosStorage = localStorage.getItem('carritoManufactura');
      let articulosJson = JSON.parse(articulosStorage);
      let newJson: Array<string> = [];
      let found = false;
      articulosJson.forEach((element) => {
        if (id === element.id) {
          if (!found) {
            found = true;
          } else {
            newJson.push(element);
          }
        } else {
          newJson.push(element);
        }
      });
      let newJsonString = JSON.stringify(newJson);
      localStorage.setItem('carritoManufactura', newJsonString);
    } else {
      let articulosStorage = localStorage.getItem('carritoInsumo');
      let articulosJson = JSON.parse(articulosStorage);
      let newJson: Array<string> = [];
      let found = false;
      articulosJson.forEach((element) => {
        if (id === element.id) {
          if (!found) {
            found = true;
          } else {
            newJson.push(element);
          }
        } else {
          newJson.push(element);
        }
      });
      let newJsonString = JSON.stringify(newJson);
      localStorage.setItem('carritoInsumo', newJsonString);
    }

    this.articulosManufactura = [];
    this.getArticulos();*/
    this.getArticulos();
  }

  addArticulo(iterador /*, esManuf*/) {
    //if (esManuf) {
    console.log('Agragando');
    this.listaDetallePedido[iterador].cantidad++;
    console.log(this.listaDetallePedido[iterador].cantidad);

    let newJsonString = JSON.stringify(this.listaDetallePedido);
    localStorage.setItem('carritoDetallesPedido', newJsonString);

    this.getArticulos();
    /*this.articuloManufacturadoService.getOne(id).subscribe((articulo) => {
        let articulosStorage = localStorage.getItem('carritoManufactura');
        let articulosJson = JSON.parse(articulosStorage);
        articulosJson.push(articulo);
        let newJsonString = JSON.stringify(articulosJson);
        localStorage.setItem('carritoManufactura', newJsonString);
        this.articulosManufactura = [];
        this.getArticulos();
      });*/
    //} else {
    /*this.articuloInsumoService.getOne(id).subscribe((articulo) => {
        let articulosStorage = localStorage.getItem('carritoInsumo');
        let articulosJson = JSON.parse(articulosStorage);
        articulosJson.push(articulo);
        let newJsonString = JSON.stringify(articulosJson);
        localStorage.setItem('carritoInsumo', newJsonString);
        this.articulosManufactura = [];
        this.getArticulos();
      });*/
    //}
  }

  getArticulos() {
    let detallesPedidoStorage = localStorage.getItem('carritoDetallesPedido');
    let detallesPedido = JSON.parse(detallesPedidoStorage);
    console.log(detallesPedido);
    this.listaDetallePedido = detallesPedido;
    // let articulosManufacturaStorage = localStorage.getItem(
    //   'carritoManufactura'
    // );
    // let articulosManufacturaJson = JSON.parse(articulosManufacturaStorage);
    // let articulosInsumoStorage = localStorage.getItem('carritoInsumo');
    // let articulosInsumoJson = JSON.parse(articulosInsumoStorage);
    // this.articulosManufactura = articulosManufacturaJson;
    // this.articulosInsumo = articulosInsumoJson;
    // console.log(
    //   'Productos manufacturados en carrito:',
    //   articulosManufacturaJson
    // );
    // console.log('Productos insumo en carrito:', articulosInsumoJson);
    this.getTotal();
    // this.crearPedidosDetalle();
  }

  getTotal() {
    this.total = 0;
    this.listaDetallePedido.forEach((detallePedidoItem) => {
      if (detallePedidoItem.esInsumo) {
        this.total +=
          detallePedidoItem.articuloInsumo.precio_de_venta *
          detallePedidoItem.cantidad;
      } else {
        this.total +=
          detallePedidoItem.articuloManufacturado.precio_de_venta *
          detallePedidoItem.cantidad;
      }
    });
  }

  pagar() {
    this.loginService.isAuth().subscribe((data) => {
      if (data) {
        this.crearPedido();
      } else {
        //Colocar alerta bonita
        this.router.navigate(['/login']);
      }
    });
  }

  crearPedidosDetalle() {
    let articulosManufacturaStorage = localStorage.getItem(
      'carritoManufactura'
    );
    let articulosManufacturaJson = JSON.parse(articulosManufacturaStorage);
    let articulosInsumoStorage = localStorage.getItem('carritoInsumo');
    let articulosInsumoJson = JSON.parse(articulosInsumoStorage);
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
          // this.pedido.hora_estimada_fin = new Date();

          this.pedido.lista_detallePedido = this.listaDetallePedido;

          console.log(this.pedido);
          /*this.pedidoService.post(this.pedido).subscribe((posted) => {
            console.log('posted', posted);
          });*/
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  denominacion(detallePedido: DetallePedido): string {
    return detallePedido.esInsumo
      ? detallePedido.articuloInsumo.denominacion
      : detallePedido.articuloManufacturado.denominacion;
  }

  precioVenta(detallePedido: DetallePedido): number {
    return detallePedido.esInsumo
      ? detallePedido.articuloInsumo.precio_de_venta
      : detallePedido.articuloManufacturado.precio_de_venta;
  }

  imagenArticulo(detallePedido: DetallePedido): string {
    return detallePedido.esInsumo
      ? detallePedido.articuloInsumo.url_imagen
      : detallePedido.articuloManufacturado.url_imagen;
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

  get checkearHorario(): Boolean {
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
