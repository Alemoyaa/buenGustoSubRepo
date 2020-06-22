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
    this.crearFormulario();
    this.traerRoles();

  }


  crearFormulario() {
    // creo el formulario todo por default vacio y le asigno que sea disabled para q no se puedan editar
    // solo se podra editar el rol de la persona
    this.formularioPersona = new FormGroup({
      id: new FormControl({value: 0 , disabled: true}),
      nombre: new FormControl({value: '' , disabled: true}),
      apellido:  new FormControl({value: '' , disabled: true}),
      telefono: new FormControl({value: 0 , disabled: true}),

      domicilio: new FormGroup({
        id: new FormControl({value: 0 , disabled: true}),
        calle: new FormControl({value: '' , disabled: true}),
        nroDepartamento: new FormControl({value: 0 , disabled: true}),
        numero: new FormControl({value: 0 , disabled: true}),
        piso: new FormControl({value: 0 , disabled: true}),
        aclaracion: new FormControl({value: '' , disabled: true}),
        localidad: new FormGroup({
          id: new FormControl({value: 0 , disabled: true}),
          nombre: new FormControl({value: '' , disabled: true}),
          provincia: new FormGroup({
            id: new FormControl({value: 0 , disabled: true}),
            nombre: new FormControl({value: '' , disabled: true}),
            pais: new FormGroup({
              id: new FormControl({value: 0 , disabled: true}),
              nombre: new FormControl({value: '' , disabled: true}),
            })
          })
        })
      }),
      usuario: new FormGroup({
        id: new FormControl({value: 0 , disabled: true}),
        email: new FormControl({value: '' , disabled: true}),
        rol: new FormGroup({
          id: new FormControl({value: 0 , disabled: true}),
          nombreRol: new FormControl({value: '' , disabled: true}),
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
    console.log('id cliente actualziarRol() ');
    console.log(
      'formulario value actualziarRol() ',
      this.formularioPersona.value
    );

  }

  seleccionarRol(id: number) {
    console.log('seleccionar rol id parametro :', id);
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
        console.log(this.rolSeleccionado);
      });
    }
  }

  // traigo los roles para mostrarlos en el formulario
  traerRoles() {
    this.rolService.getAll().subscribe((roles) => {
      this.rol = roles;
      console.log('Traer Roles() :', this.rol);
    });
  }

}
