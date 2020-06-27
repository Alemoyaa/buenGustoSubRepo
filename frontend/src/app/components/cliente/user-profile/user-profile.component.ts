import { AlertsService } from './../../../services/alertServices/alerts.service';
import { Localidad } from 'src/app/entidades/Localidad';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../../services/serviciosCliente/clienteServices/cliente.service';
import { LoginService } from './../../../services/loginServices/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../entidades/Cliente';
import { LocalidadService } from 'src/app/services/serviciosCliente/localidadServices/localidad.service';

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

  listaLocalidades: Localidad[] = [];

  constructor(
    private serviceCliente: ClienteService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService,
    private serviceLocalidad: LocalidadService,
    private serviceAlert: AlertsService
  ) {
    this.rutaActiva.params.subscribe(
      (data) => {
        if (data.id !== null) {
          this.getOneByUid(data.id);
          this.getLocalidades();
        }
      },
      (err) => {
        serviceAlert.mensajeWarning(
          'Usuario no encontrado',
          'El usuario no fue encontrado. Por favor vuelva a intentarlo mas tarde'
        );
        console.error(err);
      }
    );
    this.datosUser();
  }

  ngOnInit(): void {}

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuario); //me traigo los datos de google desde el service
  }

  async getLocalidades() {
    await this.serviceLocalidad.getAll().subscribe(
      (res) => {
        res.forEach((localidad) => {
          if (this.cliente.domicilio.localidad.id === localidad.id) {
          } else {
            this.listaLocalidades.push(localidad);
          }
        });
      },
      (err) => {
        //console.error(err);
        this.serviceLogin.salir();
        this.serviceLogin.logout();
      }
    );
  }

  async getOneByUid(uid: string) {
    await this.serviceCliente.getByUidFirebase(uid).subscribe((data) => {
      this.cliente = data;
      // console.log(this.cliente);
    });
  }

  updateUsuario(formUser: NgForm) {
    if (formUser.invalid) {
      console.log('invalido', formUser.invalid);
      this.serviceAlert.mensajeError(
        'La fecha son incorrectas',
        'Por favor revise el orden de las fechas ingresadas'
      );
    } else {
      this.serviceCliente.put(this.cliente.id, this.cliente).subscribe(
        (res) => {
          this.cliente = res;
        },
        (err) => {
          this.serviceAlert.mensajeError(
            'Ocurrio un problema',
            'Por favor vuelva a intentarlo mas tarde'
          );
          //console.log(err);
        }
      );
    }
  }
}
