import { Usuario } from './../../../entidades/Usuario';
import { UsuarioServices } from './../../../services/serviciosCliente/usuarioServices/usuario.services';
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
    nombre: '',
    apellido: '',
    domicilio: {
      id: null,
      aclaracion: null,
      calle: null,
      localidad: {
        id: null,
        nombre: '',
        provincia: null,
      },
      nroDepartamento: null,
      numero: null,
      piso: null,
    },
    telefono: null,
    usuario: {
      id: 0,
      email: null,
      uid_firebase: null,
      rol: null,
    },
  };

  constructor(
    private service: UsuarioServices,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService
  ) {
    this.rutaActiva.params.subscribe((data) => {
      if (data.id !== null) {
        this.getOneByUid(data.id);
      }
    });
    this.datosUser();
  }

  ngOnInit(): void {}

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuario); //me traigo los datos de google desde el service
  }

  async getOneByUid(uid: string) {
    await this.service.getByUidFirebase(uid).subscribe((data) => {
      this.cliente.usuario = data;
      console.log(this.cliente);
    });
  }
}
