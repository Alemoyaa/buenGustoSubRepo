import { Cliente } from './../../../entidades/Cliente';
import { LoginService } from './../../../services/loginServices/login.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serviceLogin: LoginService) { }

  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    email: '',
    foto: '',
    domicilio: {
      id: 0,
      calle: '',
      localidad: '',
      numero: null
    }
  };

  ngOnInit(): void {
  this.serviceLogin.datosGoogle(this.cliente);//para mostrar la foto de perfil en el navbar
  }

}
