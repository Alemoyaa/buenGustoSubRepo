import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private afsAuth: AngularFireAuth) {}

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(email, password).then(
        (data) => resolve(console.log('data', data)),
        (error) => reject(error)
      );
    });
  }
}
