import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { RolService } from 'src/app/services/serviciosCliente/rolServices/rol.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { Rol } from 'src/app/entidades/Rol';


@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html',
  styleUrls: ['./formulario-rol.component.css']
})
export class FormularioRolComponent implements OnInit {
  cliente: Cliente;
  formularioPersona: FormGroup;
  rol: Rol[] = new Array<Rol>();
  rolSeleccionado: Rol;

  @Input() set clienteSeleccionado(cliente) {
    this.crearFormulario();
    if (cliente) {
      this.cliente = cliente;
      this.formularioPersona.setValue({
        id: cliente.id,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,

        usuario: {
          id: cliente.usuario.id,
          email: cliente.usuario.email,
          rol: {
            id: cliente.usuario.rol.id,
            nombreRol: cliente.usuario.rol.nombreRol
          }

        },

        domicilio: {
          id: cliente.domicilio.id,
          calle: cliente.domicilio.calle,
          nroDepartamento: cliente.domicilio.nroDepartamento,
          numero: cliente.domicilio.numero,
          piso: cliente.domicilio.piso,
          aclaracion: cliente.domicilio.aclaracion,
          localidad: {
            id: cliente.domicilio.localidad.id,
            nombre: cliente.domicilio.localidad.nombre,
            provincia: {
              id: cliente.domicilio.localidad.provincia.id,
              nombre: cliente.domicilio.localidad.provincia.nombre,
              pais: {
                id: cliente.domicilio.localidad.provincia.pais.id,
                nombre: cliente.domicilio.localidad.provincia.pais.nombre
              }
            }
          }
        },


      });
    }





  }
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private rolService: RolService,
    private alerts: AlertsService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.traerRoles();

  }


  crearFormulario() {
    // creo el formulario todo por default vacio y le asigno que sea disabled para q no se puedan editar
    // solo se podra editar el rol de la persona
    this.formularioPersona = this.fb.group({
      id: 0,
      nombre: '',
      apellido: '',
      telefono: '',

      domicilio: this.fb.group({
        id: 0,
        calle: '',
        nroDepartamento: 0,
        numero: 0,
        piso: 0,
        aclaracion: '',
        localidad: this.fb.group({
          id: 0,
          nombre: '',
          provincia: this.fb.group({
            id: 0,
            nombre: '',
            pais: this.fb.group({
              id: 0,
              nombre: ''
            })
          })
        })
      }),
      usuario: this.fb.group({
        id: 0,
        email: '',
        rol: this.fb.group({
          id: 0,
          nombreRol: ''
        })
      }),
    });
  }

  actualizar() {
    console.log(this.formularioPersona.value);

  }

  seleccionarRol(id: number) {
    console.log('seleccionar rol id parametro :', id);

    if (id != null) {
      this.rolService.getOne(id).subscribe((rol) => {
        this.rolSeleccionado = rol;

        console.log(this.rolSeleccionado);
      });
    }
  }

  traerRoles() {
    this.rolService.getAll().subscribe((roles) => {
      this.rol = roles;
      console.log('Traer Roles() :', this.rol);
    });
  }

}
