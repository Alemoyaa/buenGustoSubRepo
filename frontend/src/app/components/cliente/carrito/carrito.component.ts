import {FacturaService} from './../../../services/serviciosCliente/facturaServices/factura.service';
import {Factura} from './../../../entidades/Factura';
import {AlertsService} from './../../../services/alertServices/alerts.service';
import {DetallePedido} from 'src/app/entidades/DetallePedido';
import {Component, OnInit} from '@angular/core';
import {Pedido} from 'src/app/entidades/Pedido';
import {LoginService} from 'src/app/services/loginServices/login.service';
import {ClienteService} from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import {PedidoServices} from 'src/app/services/serviciosCliente/pedidoServices/pedido.service';
import {EstadoPedido} from 'src/app/entidades/EstadoPedido';
import {ArticuloManufacturado} from 'src/app/entidades/ArticuloManufacturado';
import {Router} from '@angular/router';
import {ArticuloInsumo} from 'src/app/entidades/ArticuloInsumo';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  listaDetallePedido: DetallePedido[] = [];
  factura: Factura = new Factura();

  aclaracion: String;
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
  articulosManufactura: Array<ArticuloManufacturado> = [];
  articulosInsumo: Array<ArticuloInsumo> = [];
  total = 0;
  otroMedioDePago = false;
  envio = false;

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

  get numeroValido(): boolean {
    //Caracteres que si se ingresan no se podra realizar el pedido
    var expresion = /[a-zA-Z&\/\\#,+()$~%.'":*?<>{}]/g; //RegExp

    if (this.envio) {
      return true;
    }

    if (!this.otroMedioDePago) {
      return true;
    }

    if (this.factura.nroTarjeta) {
      //Si tenemos coincidencias se desabilita el boton
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

  ngOnInit() {
  }

  deleteArticulo(index: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Eliminaras un producto de tu carrito',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        let detallePedidoStorage = JSON.parse(
          localStorage.getItem('carritoDetallesPedido')
        );
        let newJson: Array<DetallePedido> = [];

        for (let iterador = 0; iterador < detallePedidoStorage.length; iterador++) {
          if (iterador === index) {
            console.log(
              'item eliminado ->',
              detallePedidoStorage[iterador]
            );
          } else {
            newJson.push(detallePedidoStorage[iterador]);
          }
        }

        let newJsonString = JSON.stringify(newJson);
        localStorage.setItem('carritoDetallesPedido', newJsonString);
        this.listaDetallePedido = [];
        this.getArticulos();
        Swal.fire(
          'Eliminado',
          '',
          'success'
        );
      }
    });
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
      await this.clienteService.getByUidFirebase(data.uid).subscribe(
        (user) => {
          if (this.envio && !user.domicilio) {
            Swal.fire({
              icon: 'warning',
              title: 'Cuidado',
              timer: 1600,
              timerProgressBar: true,
              showConfirmButton: false,
              text: 'Su perfil no posee domicilio',
            }).then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Direccionando al perfil',
                timer: 2100,
                showConfirmButton: false,
                timerProgressBar: true,
                text: 'Sera direccionado a su perfil para que complete el domicilio',
              }).then(() => {
                this.router.navigate(['user-profile/' + data.uid]);
              });
            });
          } else {
            this.pedido = new Pedido();
            this.pedido.tipo_Envio = this.envio;

            this.pedido.estadoPedido = new EstadoPedido();
            this.pedido.estadoPedido.id = 1;

            this.pedido.clientePedido = user;
            this.pedido.fechaRealizacion = new Date();

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
                  (facturaRes) => {
                    console.log('Factura', facturaRes);
                    Swal.fire({
                      icon: 'warning',
                      title: 'Realizado',
                      timer: 1600,
                      showConfirmButton: false,
                      timerProgressBar: true,
                      text: 'Su pedido fue realizado con exito',
                    }).then(() => {
                      Swal.fire({
                        icon: 'success',
                        timer: 2100,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        text: 'Si desea ver el pedido, ingrese en el historial de sus pedidos',
                      }).then(() => {
                        this.router.navigate(['user-profile/' + data.uid]);
                        localStorage.clear();
                      });
                    });
                  },
                  (err) => {
                    console.error(err);
                  }
                );
              });
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  stockValido() {
    /*this.pedidoService.comprobarStock(this.pedido).subscribe(value => {
      console.log(value);
      if (value){
        console.log('aaaaaaaaaa ando k emocion', value);*/
        this.pagar();
      /*} else{
        console.log('no ando', value);
        Swal.fire({
          icon: 'warning',
          timer: 2300,
          title: 'Su pedido fue cancelado',
          showConfirmButton: false,
          timerProgressBar: true,
          text: 'El restaurante no cuenta con los articulos necesarios para preparar su pedido',
        }).then(() => {
          Swal.fire({
            icon: 'info',
            timer: 2300,
            showConfirmButton: false,
            timerProgressBar: true,
            text: 'Cambie las cantidades o los articulos de su pedido',
          });
        });
      }
    }, error => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        timer: 2100,
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timerProgressBar: true,
        text: 'Por favor vuelva a intentarlo mas tarde',
      });
      return false;
    });*/
  }

  setPago(pago) {
    if (pago === '0') {
      this.otroMedioDePago = false;
    } else {
      this.otroMedioDePago = true;
    }
  }
}
