import { Component, OnInit, Input, Host } from '@angular/core';
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
import { UsuariosComponent } from '../../usuarios.component';



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

  // traigo los datos del componente padre y seteo el formulario con sus datos
  @Input() set clienteSeleccionado(cliente) {
    this.crearFormulario();
    if (cliente.usuario) {
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
    private alerts: AlertsService,
    @Host() private tabla: UsuariosComponent) { }

  ngOnInit(): void {
    // creo el formulario  y traigo los roles para mostrarlos en el
    this.crearFormulario();
    this.traerRoles();

  }

  // creao el formulario con new formControls para 
  // poder setearle la propiedad disable y que el usuario no pueda modificar los datos
  crearFormulario() {
    // creo el formulario todo por default vacio y le asigno que sea disabled para q no se puedan editar
    // solo se podra editar el rol de la persona
    this.formularioPersona = new FormGroup({
      id: new FormControl({ value: 0, disabled: false }),
      nombre: new FormControl({ value: '', disabled: false }),
      apellido: new FormControl({ value: '', disabled: false }),
      telefono: new FormControl({ value: 0, disabled: false }),

      domicilio: new FormGroup({
        id: new FormControl({ value: 0, disabled: false }),
        calle: new FormControl({ value: '', disabled: false }),
        nroDepartamento: new FormControl({ value: 0, disabled: false }),
        numero: new FormControl({ value: 0, disabled: false }),
        piso: new FormControl({ value: 0, disabled: false }),
        aclaracion: new FormControl({ value: '', disabled: false }),
        localidad: new FormGroup({
          id: new FormControl({ value: 0, disabled: false }),
          nombre: new FormControl({ value: '', disabled: false }),
          provincia: new FormGroup({
            id: new FormControl({ value: 0, disabled: false }),
            nombre: new FormControl({ value: '', disabled: false }),
            pais: new FormGroup({
              id: new FormControl({ value: 0, disabled: false }),
              nombre: new FormControl({ value: '', disabled: false }),
            })
          })
        })
      }),
      usuario: new FormGroup({
        id: new FormControl({ value: 0, disabled: false }),
        email: new FormControl({ value: '', disabled: false }),
        rol: new FormGroup({
          id: new FormControl({ value: 0 }),
          nombreRol: new FormControl({ value: '' }),
        })
      }),
    });
  }

  actualizar() {
    console.log(this.formularioPersona.value);
    this.clienteService.put(this.cliente.id, this.formularioPersona.value).subscribe(
      res => {
        this.alerts.mensajeSuccess('Actualizacion de Rol realizado',
          `El rol del usuario ${this.cliente.nombre} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`);
        this.tabla.usuarios.filter(item => {
          if (item.id === this.cliente.id) {
            const idexOfFactura = this.tabla.usuarios.indexOf(item);
            this.tabla.usuarios.splice(idexOfFactura, 1, res);
          }
        });
      },
      err => {
        this.alerts.mensajeError('No se ah podido actualizar el Rol del usuario', 'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos');
      }
    );


  }

  //  selecciono el rol en el formulario, traigo el rol seleccionado y lo seteo a mi usuario
  seleccionarRol(id: number) {

    // accedo al control usuario
    const control = <FormGroup>this.formularioPersona.controls['usuario'];
    // dentro de usuarios se encuentra rol
    const controlrol = control.controls['rol'];
    // verifico q no me envie un null
    if (id != null) {
      // traigo el rol utilizando el id que me envian por formulario
      this.rolService.getOne(id).subscribe((rol) => {
        this.rolSeleccionado = rol;
        // seteo el formulario con el rol id y el nombre del rol traido
        controlrol.setValue({
          id: rol.id,
          nombreRol: rol.nombreRol
        });

      });
    }
  }

  // traigo los roles para mostrarlos en el formulario
  traerRoles() {
    this.rolService.getAll().subscribe((roles) => {
      this.rol = roles;

    });
  }




}
