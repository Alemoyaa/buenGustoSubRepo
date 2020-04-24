import { Cliente } from './../../../entidades/Cliente';
import { LoginService } from './../../../services/loginServices/login.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private serviceLogin: LoginService) {}

cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    email: '',
    foto: '',
    uidFirebase: '',
    rol: {
      id: 0,
      nombreRol : '',
      descripcion: ''
    },
  };

  navbarUsuario = true;

  ngOnInit(): void {
    this.existeUsuario();

    this.serviceLogin.datosGoogle(this.cliente); //para mostrar la foto de perfil en el navbar
  }

  existeUsuario() {
    this.serviceLogin.isAuth().subscribe((user) => {
      if (user) {
        this.navbarUsuario = true;
      } else {
        this.navbarUsuario = false;
      }
    });
  }

  cerrarSesion() {
    this.serviceLogin.logout();
  }
}
