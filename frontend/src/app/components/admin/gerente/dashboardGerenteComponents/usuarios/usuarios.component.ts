import { Domicilio } from './../../../../../entidades/Domicilio';
import { DomicilioService } from './../../../../../services/serviciosCliente/domicilioServices/domicilio.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/entidades/Cliente';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClienteService } from '../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  formularioPersona: FormGroup;
  cliente: Cliente[] = new Array<Cliente>();
  constructor(private fb: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit(): void {
    
    this.traerDatos();
    this.crearFormulario();
  }



  traerDatos() {
    this.clienteService.getAll().subscribe(data => {
      console.log('data :', data);

      return this.cliente = data;
    });
  }

  crearFormulario(){
    this.formularioPersona = this.fb.group({
      nombre: new FormControl({value: '', disabled: true}),
      apellido: new FormControl({value: '', disabled: true}),
      telefono: new FormControl({value: '', disabled: true}),
      email: new FormControl({value: '', disabled: true}),
      foto: new FormControl({value: '', disabled: true}),
      rol: this.fb.group({
        nombreRol: new FormControl('' , Validators.required ),
        descripcion: new FormControl({value: '', disabled: true})
      })
    });
  }

  preCargarDatosFormulario(cliente: Cliente){
    this.formularioPersona = this.fb.group({
      nombre: new FormControl({value: cliente.nombre, disabled: true}),
      apellido: new FormControl({value: cliente.apellido, disabled: true}),
      telefono: new FormControl({value: cliente.telefono, disabled: true}),
      email: new FormControl({value: cliente.email, disabled: true}),
      foto: '',
      rol: this.fb.group({
        nombreRol: cliente.rol.nombreRol,
        descripcion: cliente.rol.descripcion
      })
    });
  }

  
}
