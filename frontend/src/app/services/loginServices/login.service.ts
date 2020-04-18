import { Cliente } from './../../entidades/Cliente';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public providerId: string = 'null';
  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    email: '',
    foto: '',
    domicilio: {
      id: 0,
      calle: '',
      localidad: '',
      numero: null
    }
  };

  constructor(private afsAuth: AngularFireAuth) { }

  //me traigo los datos que me da google
  datosGoogle(clienta : Cliente) {
  this.isAuth().subscribe(cliente =>{
    if(cliente){
      clienta.nombre= cliente.displayName;
     //clienta.apellido=
   // clienta.telefono= cliente.
      clienta.email= cliente.email;
      clienta.foto= cliente.photoURL;
      this.providerId= cliente.providerData[0].providerId;//hacer ngIf para que solo se guarde con google

    }
  });
}

  loginGoogle() {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        data => resolve(console.log('data', data)),
        error => reject(error)
      );
    });


  }

  loginEmailPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, password).then(
        data => resolve(console.log('data', data)),
        error => reject(error)
      );
    });

  }


  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(email, password).then(
        (data) => resolve(console.log('data', data)),
        (error) => reject(error)
      );
    });
  }

<<<<<<< HEAD
  //Para saber si esta logueado
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

=======
  recuperarPassword(email: string) {
>>>>>>> 35047f643b2e3b4064085fd2f8a6403936ecc253

    return this.afsAuth.sendPasswordResetEmail(email);
  }

  

  logout() {
    this.afsAuth.signOut();
  }

}
