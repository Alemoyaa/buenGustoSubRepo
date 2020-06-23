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

  usuarios: Cliente[] = new Array<Cliente>();

  pageActual: number = 1;

  domicilio: Domicilio = new Domicilio();
  cliente: Cliente = new Cliente();
  filtroBuscador: any = '';
  constructor(

    private clienteService: ClienteService,

    private alerts: AlertsService
  ) { }

  ngOnInit(): void {
    this.traerDatos();


    this.alerts.mensajeSuccess('Bienvenido a la seccion Usuario', 'Aqui usted podra asignar el rol a cada usuario registrado en la pagina');
  }

  get filtrar(): Cliente[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.usuarios.filter((cliente) => {
      return matcher.test([cliente.nombre, cliente.apellido, cliente.usuario.rol.nombreRol].join());
    });
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


  mostrarDomicilio(cliente:Cliente){
    this.domicilio = cliente.domicilio;
    console.log(this.domicilio);
  }

  // pre cargo los datos en el formulario de el usuario seleccionnado para editar el rol
  preCargarDatosFormulario(cliente: Cliente) {
    this.cliente = cliente;
   console.log(this.cliente);
  }



  // post a la base de datos con el cliente y su rol
  // actualizarRol() {
    // this.clienteService.put(this.idCliente, this.formularioPersona.value);
  //   console.log('id cliente actualziarRol() ', this.idUsuario);
  //   console.log(
  //     'formulario value actualziarRol() ',
  //     this.formularioPersona.value
  //   );
  // }

  // se pide confirmacion de la eliminacion de el usuario y se elimina segun el id recibido por parametro
  eliminar(id: number) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.clienteService.delete(id).subscribe((data) => {
        alert('Registro eliminado');

      });
    } else {
    }
  }
}
