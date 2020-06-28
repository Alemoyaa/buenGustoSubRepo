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

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  listaDetallePedido: DetallePedido[] = [];

  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService,
    private pedidoService: PedidoServices,
    private router: Router
  ) {}

  pedido: Pedido = {
    ClientePedido: null,
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

  articulos: Array<ArticuloManufacturado> = [];
  articulosSinRepetir: Array<ArticuloManufacturado> = [];
  total = 0;
  otroMedioDePago = false;
  envio = false;

  deleteArticulo(id) {
    let articulosStorage = localStorage.getItem('carrito');
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
    localStorage.setItem('carrito', newJsonString);
    this.articulos = [];
    this.getArticulos();
  }

  addArticulo(id, denominacion, url_imagen, precio_de_venta) {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    articulosJson.push({
      id: id,
      denominacion: denominacion,
      precio_de_venta: precio_de_venta,
      url_imagen: url_imagen,
    });
    let newJsonString = JSON.stringify(articulosJson);
    localStorage.setItem('carrito', newJsonString);
    this.articulos = [];
    this.getArticulos();
  }

  getArticulos() {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    articulosJson.forEach((element) => {
      this.articulos.push(element);
    });
    console.log('e', this.articulos);
    this.setCantidad();
    this.getTotal();
  }

  setCantidad() {
    this.articulos.forEach((e) => {
      if (this.articulosSinRepetir.includes(e)) {
        console.log('si');
      } else {
        this.articulosSinRepetir = [];
        this.articulosSinRepetir.push(e);
      }
    });
    console.log(this.articulosSinRepetir);
  }

  getTotal() {
    this.total = 0;
    this.articulos.forEach((element) => {
      this.total += element.precio_de_venta;
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

  async crearPedido() {
    await this.loginService.isAuth().subscribe(async (data) => {
      console.log('_-----------> ', data);
      await this.clienteService.getByUidFirebase(data.uid).subscribe(
        (user) => {
          this.pedido = new Pedido();
          if (!this.envio) {
            this.pedido.tipo_Envio = false;
          } else {
            this.pedido.tipo_Envio = true;
          }

          console.log('--- user', user);

          this.pedido.ClientePedido = new Cliente();

          this.pedido.ClientePedido = user;
          this.pedido.fechaRealizacion = new Date();
          this.pedido.hora_estimada_fin = new Date();

          let articulosStorage = localStorage.getItem('carrito');
          let articulosJson = JSON.parse(articulosStorage);

          articulosJson.forEach((element) => {
            this.listaDetallePedido.push(element);
            console.log(element);
          });

          this.pedido.lista_detallePedido = this.listaDetallePedido;

          this.pedido.estadoPedido = new EstadoPedido();

          this.pedido.estadoPedido.id = 1;

          console.log(this.pedido);
          this.pedidoService.post(this.pedido).subscribe((posted) => {
            console.log('posted', posted);
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
