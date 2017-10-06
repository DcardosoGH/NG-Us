import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
    this.user = this.afAuth.authState;
  }

  login(user:User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

  authUser(){
    return this.user;
  }

}
