import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/entidades/Articulo';
import { Pedido } from 'src/app/entidades/Pedido';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { PedidoServices } from 'src/app/services/serviciosCliente/pedidoServices/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService,
    private pedidoService: PedidoServices
  ) {}

  tipoEnvio = 'null';
  pedido: Pedido = {
    clientePedido: null,
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

  articulos: Array<Articulo> = [];
  total = 0;
  otroMedioDePago = false;

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
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    this.articulos.forEach((element) => {
      this.total += element.precio_de_venta;
    });
  }

  async setPedido() {
    await this.loginService.isAuth().subscribe((data) => {
      // this.clienteService.getByUidFirebase(data.uid).subscribe((user) => {
      //   this.pedido.clientePedido = user;
      //   this.pedido.hora_estimada_fin = new Date();
      //   this.pedido.fechaRealizacion = new Date();
      //   if (this.tipoEnvio === '1') {
      //     this.pedido.tipo_Envio = true;
      //   } else {
      //     this.pedido.tipo_Envio = false;
      //   }
      // });
    });
    this.pedidoService.post(this.pedido).subscribe((posted) => {
      console.log('posted');
    });
  }

  setPago(pago) {
    if (pago === '0') {
      this.otroMedioDePago = false;
    } else {
      this.otroMedioDePago = true;
    }
  }
}
