import {Component, Input, OnInit} from '@angular/core';
import {Domicilio} from 'src/app/entidades/Domicilio';

@Component({
  selector: 'app-mostrar-domicilio',
  templateUrl: './mostrar-domicilio.component.html',
  styleUrls: ['./mostrar-domicilio.component.css']
})
export class MostrarDomicilioComponent implements OnInit {
  domicilioAMostrar: Domicilio;

  @Input() set domicilioSeleccionado(domicilio) {
    // si existe domicilio
    if (domicilio) {
      this.domicilioAMostrar = domicilio;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.domicilioAMostrar);
  }

}
