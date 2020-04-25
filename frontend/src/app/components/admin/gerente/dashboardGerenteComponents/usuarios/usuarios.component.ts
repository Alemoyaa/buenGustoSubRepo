import { RolService } from './../../../../../services/serviciosCliente/rolServices/rol.service';
import { Domicilio } from './../../../../../entidades/Domicilio';
import { DomicilioService } from './../../../../../services/serviciosCliente/domicilioServices/domicilio.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/entidades/Cliente';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClienteService } from '../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { filter } from 'rxjs/operators';
import { Rol } from 'src/app/entidades/Rol';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  formularioPersona: FormGroup;
  cliente: Cliente[] = new Array<Cliente>();
  rol: Rol[] = new Array<Rol>();
  rolSeleccionado: Rol = new Rol();
  idCliente: number;

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private rolService: RolService) { }

  ngOnInit(): void {

    this.traerDatos();
    this.crearFormulario();
    this.traerRoles();
    
    
  }


  // traigo todos los clientes con sus respectivos roles
  traerDatos() {
    this.clienteService.getAll().subscribe(data => {
      console.log('data :', data);
      // seteo la data del service a la variable de el .ts
      return this.cliente = data;
    });
  }

  crearFormulario() {
    // creo el formulario todo por default vacio y le asigno que sea disabled para q no se puedan editar
    // solo se podra editar el rol de la persona
    this.formularioPersona = this.fb.group({
      nombre: new FormControl({ value: '', disabled: true }),
      apellido: new FormControl({ value: '', disabled: true }),
      telefono: new FormControl({ value: '', disabled: true }),
      email: new FormControl({ value: '', disabled: true }),
      foto: new FormControl({ value: '', disabled: true }),
      rol: this.fb.group({
        nombreRol: new FormControl('', Validators.required),
        descripcion: new FormControl({ value: '', disabled: true })
      })
    });
  }



  // pre cargo los datos en el formulario de el usuario seleccionnado para editar el rol
  preCargarDatosFormulario(cliente: Cliente) {
    this.formularioPersona = this.fb.group({
      nombre: new FormControl({ value: cliente.nombre, disabled: true }),
      apellido: new FormControl({ value: cliente.apellido, disabled: true }),
      telefono: new FormControl({ value: cliente.telefono, disabled: true }),
      email: new FormControl({ value: cliente.email, disabled: true }),
      foto: '',
      rol: this.fb.group({
        nombreRol: '',
        descripcion: ''
      }),
      
    });
    this.idCliente = cliente.id;
  }

  // Traer todos los posibles roles para mostrarlos en el html
  traerRoles() {
    this.rolService.getAll().subscribe(roles => {
       this.rol = roles;
       console.log('roles', this.rol);
    });
  }

  // seleccionamos rol en html
  seleccionarRol(id: number) {
    console.log('id', id);

    this.rolService.getOne(id).subscribe( rol =>{
      this.rolSeleccionado = rol;
      console.log(this.rolSeleccionado);
    });
  }


  // post a la base de datos con el cliente y su rol
  actualizarRol(){
    this.clienteService.put(this.idCliente, this.formularioPersona.value);
  }

}
