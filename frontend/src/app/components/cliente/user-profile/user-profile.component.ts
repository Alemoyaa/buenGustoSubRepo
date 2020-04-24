import { LoginService } from './../../../services/loginServices/login.service';
import { Cliente } from './../../../entidades/Cliente';
import { UserProfileService } from './../../../services/serviciosCliente/userProfileServices/user-profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
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

  constructor(
    private service: UserProfileService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    //this.rutaActiva.params.subscribe(data => {
      //if (data.id !== '0') {
        //this.getOne(data.id);
      //}
    //});
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
