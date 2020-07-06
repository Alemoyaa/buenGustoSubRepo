import { UserProfileComponent } from './../../user-profile.component';
import { Component, OnInit, Input, Host } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { LocalidadService } from 'src/app/services/serviciosCliente/localidadServices/localidad.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { Localidad } from 'src/app/entidades/Localidad';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Domicilio } from '../../../../../entidades/Domicilio';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.css']
})
export class ModalFormularioComponent implements OnInit {
  formulario: FormGroup;
  listaLocalidades: Localidad[] = [];
  cliente: Cliente;
  domicilio = new Domicilio();
  @Input() set clienteUser(cliente) {
    this.BuildForm();


    if (cliente.domicilio) {
      this.cliente = cliente;
      console.log(cliente);
      this.formulario.setValue({
        id: cliente.id,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,

        usuario: {
          id: cliente.usuario.id,
          email: cliente.usuario.email,
          uid_firebase: cliente.usuario.uid_firebase,
          rol: {
            id: cliente.usuario.rol.id
          }
        },
        domicilio: {
          id: cliente.domicilio.id,
          calle: cliente.domicilio.calle,
          numero: cliente.domicilio.numero,
          piso: cliente.domicilio.piso,
          nroDepartamento: cliente.domicilio.nroDepartamento,
          aclaracion: cliente.domicilio.aclaracion,
          localidad: {
            id: cliente.domicilio.localidad.id,
            nombre: cliente.domicilio.localidad.nombre
          }
        }
      });
    } else {
      this.cliente = cliente;
      this.formulario.setValue({
        id: cliente.id,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,
        usuario: {
          id: cliente.usuario.id,
          email: cliente.usuario.email,
          uid_firebase: cliente.usuario.uid_firebase,
          rol: {
            id: cliente.usuario.rol.id
          }
        },
        domicilio: {
          id: 0,
          calle: '',
          numero: 0,
          piso: 0,
          nroDepartamento: 0,
          aclaracion: '',
          localidad: {
            id: 0,
            nombre: ''
          }
        }
      });


    }




  };
  constructor(
    private serviceCliente: ClienteService,
    private rutaActiva: ActivatedRoute,
    private serviceLocalidad: LocalidadService,
    private serviceAlert: AlertsService,
    private fb: FormBuilder,
    @Host() private perfil: UserProfileComponent) { }

  ngOnInit(): void {
    this.BuildForm();
    this.getLocalidades();

  }

  updateUsuario() {
    console.log(this.formulario.value);
    if (this.formulario.invalid) {
      console.log('invalido', this.formulario.invalid);
      this.serviceAlert.mensajeError(
        'Datos incorrectos',
        'Por favor revise que todos los datos sean completados en su formato correcto'
      );
    } else {

      this.serviceCliente.put(this.cliente.id, this.formulario.value).subscribe(
        (res) => {
          console.log(res);
          this.cliente = res;
          this.perfil.cliente = this.cliente;
          this.formulario.reset();
          this.serviceAlert.mensajeSuccess(
            'Actualizacion de perfil realizada',
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

  BuildForm() {
    this.formulario = this.fb.group({
      id: new FormControl(0),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl(null, [Validators.required]),

      usuario: this.fb.group({
        id: new FormControl(0),
        email: new FormControl('', Validators.required),
        uid_firebase: new FormControl('', Validators.required),
        rol: this.fb.group({
          id: new FormControl(0),
        })
      }),
      domicilio: this.fb.group({
        id: new FormControl(0),
        calle: new FormControl('', Validators.required),
        numero: new FormControl(null, [Validators.required]),
        piso: new FormControl(null, [Validators.required]),
        nroDepartamento: new FormControl(null, [Validators.required]),
        aclaracion: new FormControl('', Validators.required),
        localidad: this.fb.group({
          id: new FormControl(0),
          nombre: new FormControl(null, [Validators.required]),
        })
      })
    });
  }

}
