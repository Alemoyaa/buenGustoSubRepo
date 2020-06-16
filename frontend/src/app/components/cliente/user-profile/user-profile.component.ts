import { ClienteService } from './../../../services/serviciosCliente/clienteServices/cliente.service';
import { LoginService } from './../../../services/loginServices/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../entidades/Cliente';
import { Domicilio } from '../../../entidades/Domicilio';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  cliente: Cliente = {
    id: null,
    nombre: null,
    apellido: null,
    domicilioID: {
      id: null,
      aclaracion: null,
      calle: null,
      localidadID: null,
      nroDepartamento: null,
      numero: null,
      piso: null,
    },
    telefono: null,
    usuarioID: {
      email: null,
      uid_firebase: null,
      id: 0,
      rolID: null,
    },
  };

  constructor(
    private service: ClienteService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((data) => {
      if (data.id !== '0') {
        this.getOne(data.id);
      }
    });
    this.datosUser();
  }

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuarioID); //me traigo los datos de google desde el service
  }

  async getOne(id: number) {
    await this.service.getOne(id).subscribe((data) => {
      console.log(data);
      this.cliente = data;
    });
  }
}
