import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { Injectable } from '@angular/core';
import { UnSubscription } from '../_share/unSubscription/unSubscription.service';
import { BehaviorSubject } from 'rxjs';
import { UserTokenModel } from '../_share/models/userTokenModel';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  extends UnSubscription {

  private tokenExpirationTimer: any;
  userLogin$!: BehaviorSubject<UserTokenModel | null>;
  avatarUser$: BehaviorSubject<string> = new BehaviorSubject('./../../../assets/Images/login/no_avatar.png');
  //private auth: AngularFireAuth
  constructor(private authFireAuth: AngularFireAuthModule) {
    super();
  }





}

