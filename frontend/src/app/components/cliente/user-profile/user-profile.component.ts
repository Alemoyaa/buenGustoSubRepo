import { LoginService } from './../../../services/loginServices/login.service';
import { Usuario } from '../../../entidades/Usuario';
import { UsuarioServices } from './../../../services/serviciosCliente/UsuarioServices/usuario.services';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  cliente: Usuario = {
    id: null,
    email: null,
    rolID: null,
    uid_firebase: null,
  };

  constructor(
    private service: UsuarioServices,
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
    return this.serviceLogin.datosGoogle(this.cliente); //me traigo los datos de google desde el service
  }

  async getOne(id: number) {
    await this.service.getOne(id).subscribe((data) => {
      console.log(data);
      this.cliente = data;
    });
  }
}
