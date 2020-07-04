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
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    domicilio: {
      id: 0,
      aclaracion: '',
      calle: '',
      nroDepartamento: null,
      numero: null,
      piso: null,
      localidad: {
        id: 0,
      },
    },
    usuario: {
      id: 0,
      email: '',
      uid_firebase: '',
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
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (data) => {
        if (data.id !== null) {
          this.getOneByUid(data.id);
          this.getLocalidades();
        }
      },
      (err) => {
        this.serviceAlert.mensajeWarning(
          'Usuario no encontrado',
          'El usuario no fue encontrado. Por favor vuelva a intentarlo mas tarde'
        );
        console.error(err);
      }
    );
    this.datosUser();
   }

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuario); //me traigo los datos de google desde el service
  }

  async getLocalidades() {
    await this.serviceLocalidad.getAll().subscribe(
  
      (res) => {
        console.log('localidad ', res);
        this.listaLocalidades = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  async getOneByUid(uid: string) {
    await this.serviceCliente.getByUidFirebase(uid).subscribe(
      (data) => {
        this.cliente = data;
      },
      (error) => { }
    );
  }

  updateUsuario(formUser: NgForm) {
    console.log(formUser.value);
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
          this.serviceAlert.mensajeSuccess(
            'Realizado',
            'Sus datos fueron actualizados con exito'
          );
        },
        (err) => {
          this.serviceAlert.mensajeError(
            'Ocurrio un problema',
            'Por favor vuelva a intentarlo mas tarde'
          );
          console.log(err);
        }
      );
    }
  }

  mostrarDatos(id: number) {
    console.log(id);

    this.serviceLocalidad.getOne(id).subscribe((localidad) => {

      // seteo el formulario con el rol id y el nombre del rol traido
      this.cliente.domicilio.localidad = {
        id: localidad.id,
        nombre: localidad.nombre,
        provincia: localidad.provincia

      }

    });

  }

  pasarDatos(cliente){
    this.cliente = cliente;
  }
}
