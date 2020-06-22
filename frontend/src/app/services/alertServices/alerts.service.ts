import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }


  mensajeError(title: string, message: string) {

    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }

  mensajeSuccess(title: string, message: string) {

    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }

  mensajeWarning(title: string, message: string) {

    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }

}
