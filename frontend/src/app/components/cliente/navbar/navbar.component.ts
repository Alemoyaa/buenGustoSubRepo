import { Router } from '@angular/router';
import { Usuario } from '../../../entidades/Usuario';
import { LoginService } from './../../../services/loginServices/login.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private serviceLogin: LoginService, private route: Router) {}

  @Output() irDashboard = new EventEmitter();

  uid: string;

  cliente: Usuario = new Usuario();

  navbarUsuario = true;

  ngOnInit(): void {
    this.existeUsuario();
    this.setCarrito();
    this.serviceLogin.datosGoogle(this.cliente); //para mostrar la foto de perfil en el navbar
  }

  existeUsuario() {
    this.serviceLogin.isAuth().subscribe((user) => {
      if (user) {
        this.navbarUsuario = true;
        this.uid = user.uid;
      } else {
        this.navbarUsuario = false;
      }
    });
  }

  cerrarSesion() {
    this.serviceLogin.logout();
  }

  // hideNavbar() {
  //   if (this.route.url.includes('admin')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  setCarrito() {
    if (localStorage.getItem('carrito')) {
      console.log('Carrito existe');
    } else {
      let articulos = [];
      let articulosJson = JSON.stringify(articulos);
      localStorage.setItem('carrito', articulosJson);
    }
  }

  // enviamos un true al componente padre app.component.ts para irnos a la dashboard de admin
  irAdmin(event) {
    this.irDashboard.emit(true);
  }
}
