import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { Cliente } from 'src/app/entidades/Cliente';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  formularioPersona: FormGroup;
  cliente: Cliente[] = new Array<Cliente>();

  constructor(private clienteService: ClienteService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.traerClientes();

  }


  traerClientes() {
    return this.clienteService.getAll().subscribe(data => {
      this.cliente = data;
    });
  }

 
}
