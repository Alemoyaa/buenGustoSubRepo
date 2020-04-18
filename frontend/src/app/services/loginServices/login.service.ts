import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afsAuth: AngularFireAuth) { }


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

  recuperarPassword(email: string) {

    return this.afsAuth.sendPasswordResetEmail(email);
  }

  

  logout() {
    this.afsAuth.signOut();
  }

}
