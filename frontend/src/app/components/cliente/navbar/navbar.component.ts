import { DetallePedido } from 'src/app/entidades/DetallePedido';
import { Router } from '@angular/router';
import { Usuario } from '../../../entidades/Usuario';
import { LoginService } from './../../../services/loginServices/login.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private serviceLogin: LoginService,
    private route: Router,
    private clienteService: ClienteService,
    private alertService: AlertsService
  ) { }

  estaLogueado: boolean = true;

  uid: string;

  cliente: Usuario = new Usuario();

  navbarUsuario = true;

  ngOnInit(): void {
    this.existeUsuario();
    this.setCarrito();
    this.serviceLogin.datosGoogle(this.cliente); //para mostrar la foto de perfil en el navbar
  }

  canAccessPanel = false;

  existeUsuario() {
    this.serviceLogin.isAuth().subscribe((user) => {
      if (user) {
        this.navbarUsuario = true;
        this.uid = user.uid;
        this.clienteService.getByUidFirebase(user.uid).subscribe((data) => {
          if (data.usuario.rol.id != 5) {
            this.canAccessPanel = true;
          }
        });
      } else {
        this.navbarUsuario = false;
      }
    });
  }
  cerrarSesion() {
    Swal.fire({
      title: 'Realmente deseas cerrar sesion?',
      text: 'Recuerda que solo podras realizar compras si posees una sesion abierta',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo cerrar mi sesion!',
      cancelButtonText: 'No, quiero seguir con mi sesion iniciada'
    }).then((result) => {
      if (result.value) {
        this.serviceLogin.logout();
        this.canAccessPanel = false;
        Swal.fire(
          'Sesion Cerrada con exito',
          'Puedes volver a iniciar sesion cuando lo desees!',
          'success'
        );
      }
    });

  }

  setCarrito() {
    if (localStorage.getItem('carritoDetallesPedido')) {
      console.log('Carrito detallePedido existe');
    } else {
      let articulos = new DetallePedido();
      localStorage.setItem('carritoDetallesPedido', JSON.stringify(articulos));
    }
  }


}
