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

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private rolService: RolService
  ) {}

  ngOnInit(): void {
    this.traerDatos();
    this.crearFormulario();
    this.traerRoles();
  }

  // traigo todos los clientes con sus respectivos roles
  traerDatos() {
    this.clienteService.getAll().subscribe((data) => {
      console.log('Traer Datos () :', data);
      data.forEach((a) => {
        console.log(a.usuarioID);
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
      email: '',

      rol: this.fb.group({
        id: 0,
        nombreRol: '',
        descripcion: '',
      }),
    });
  }

  // pre cargo los datos en el formulario de el usuario seleccionnado para editar el rol
  // preCargarDatosFormulario(cliente: Cliente) {
  //   this.formularioPersona = this.fb.group({
  //     nombre: cliente.nombre,
  //     apellido: cliente.apellido,
  //     telefono: cliente.telefono,

  //     rol: this.fb.group({
  //       id: cliente.rol.id,
  //       nombreRol: cliente.rol.nombreRol,
  //       descripcion: cliente.rol.descripcion,
  //     }),
  //   });

  //   this.idUsuario = cliente.id;
  // }

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
