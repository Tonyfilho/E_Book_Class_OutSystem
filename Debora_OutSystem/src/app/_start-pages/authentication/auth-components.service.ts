import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationComponent } from './authentication.component';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

/**Types */
type SignIn = {
 email: string;
 password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationComponentsService {

  constructor(private auth: AngularFireAuth) { }


  signIn(params: SignIn): Observable<any> {
  return from(this.auth.signInWithEmailAndPassword(params.email, params.password))
  }


}

