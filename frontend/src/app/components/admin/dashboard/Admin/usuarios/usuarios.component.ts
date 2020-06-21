import { AlertsService } from './../../../../../services/alertServices/alerts.service';
import { RolService } from '../../../../../services/serviciosCliente/rolServices/rol.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/entidades/Cliente';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ClienteService } from '../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { filter } from 'rxjs/operators';
import { Rol } from 'src/app/entidades/Rol';
import { Domicilio } from 'src/app/entidades/Domicilio';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  formularioPersona: FormGroup;
  usuarios: Cliente[] = new Array<Cliente>();
  rol: Rol[] = new Array<Rol>();
  rolSeleccionado: Rol;
  idUsuario: number;
  domicilio: Domicilio = new Domicilio();

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private rolService: RolService,
    private alerts: AlertsService
  ) { }

  ngOnInit(): void {
    this.traerDatos();
    this.crearFormulario();
    this.traerRoles();

    this.alerts.mensajeSuccess('Bienvenido a la seccion Usuario', 'Aqui usted podra asignar el rol a cada usuario registrado en la pagina');
  }

  // traigo todos los clientes con sus respectivos roles
  traerDatos() {
    this.clienteService.getAll().subscribe((data) => {
      console.log('Traer Datos () :', data);
      data.forEach((a) => {
        console.log(a.usuario);
      });
      // seteo la data del service a la variable de el .ts
      return (this.usuarios = data);
    });
  }

  crearFormulario() {
    // creo el formulario todo por default vacio y le asigno que sea disabled para q no se puedan editar
    // solo se podra editar el rol de la persona
    this.formularioPersona = this.fb.group({
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

  mostrarDomicilio(cliente:Cliente){
    this.domicilio = cliente.domicilio;
    console.log(this.domicilio);
  }

  // pre cargo los datos en el formulario de el usuario seleccionnado para editar el rol
  preCargarDatosFormulario(cliente: Cliente) {

   
    // this.formularioPersona.setValue({
    //   nombre: cliente.nombre,
    //   apellido: cliente.apellido,
    //   telefono: cliente.telefono,
      
    //   domicilio: this.fb.group({
    //     id: cliente.domicilio.id,
    //     calle: cliente.domicilio.calle,
    //     nroDepartamento: cliente.domicilio.nroDepartamento,
    //     numero: cliente.domicilio.numero,
    //     piso: cliente.domicilio.piso,
    //     aclaracion: cliente.domicilio.aclaracion,
    //     localidad: this.fb.group({
    //       id: cliente.domicilio.localidad.id,
    //       nombre: cliente.domicilio.localidad.nombre,
    //       provincia: this.fb.group({
    //         id: cliente.domicilio.localidad.provincia.id,
    //         nombre: cliente.domicilio.localidad.provincia.nombre,
    //         pais: this.fb.group({
    //           id: cliente.domicilio.localidad.provincia.pais.id,
    //           nombre: cliente.domicilio.localidad.provincia.pais.nombre
    //         })
    //       })
    //     })
    //   }),
    //   usuario: this.fb.group({
    //     id: 0,
    //     email: '',
    //     rol: this.fb.group({
    //       id: 0,
    //       nombreRol: ''
    //     })
    //     //descripcion: '',
    //   }),

    // });
  }

  // Traer todos los posibles roles para mostrarlos en el html
  traerRoles() {
    this.rolService.getAll().subscribe((roles) => {
      this.rol = roles;
      console.log('Traer Roles() :', this.rol);
    });
  }

  // seleccionamos rol en html
  seleccionarRol(id: number) {
    console.log('seleccionar rol id parametro :', id);

    if (id != null) {
      this.rolService.getOne(id).subscribe((rol) => {
        this.rolSeleccionado = rol;

        console.log(this.rolSeleccionado);
      });
    }
  }

  // post a la base de datos con el cliente y su rol
  actualizarRol() {
    // this.clienteService.put(this.idCliente, this.formularioPersona.value);
    console.log('id cliente actualziarRol() ', this.idUsuario);
    console.log(
      'formulario value actualziarRol() ',
      this.formularioPersona.value
    );
  }

  // se pide confirmacion de la eliminacion de el usuario y se elimina segun el id recibido por parametro
  eliminar(id: number) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.clienteService.delete(id).subscribe((data) => {
        alert('Registro eliminado');
        this.formularioPersona.reset();
      });
    } else {
    }
  }
}
