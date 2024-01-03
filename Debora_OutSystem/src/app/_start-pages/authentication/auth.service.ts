import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { UnSubscription } from '../_share/unSubscription/unSubscription.service';
import { BehaviorSubject, catchError, from, of, tap } from 'rxjs';
import { UserTokenModel } from '../_share/models/userTokenModel';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { IModal } from '../_share/interfaces/i-modal';
import { MatDialog } from '@angular/material/dialog';
import { PopUpMaterialComponent } from '../_share/modal-pop-up/pop-up-material.component';

/**precisa forçar a importação import { GoogleAuthProvider } from 'firebase/auth'; */
const provider = new GoogleAuthProvider();
const app: FirebaseApp = initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends UnSubscription {

  private tokenExpirationTimer: any;
  userLogin$!: BehaviorSubject<UserTokenModel | null>;
  avatarUser$: BehaviorSubject<string> = new BehaviorSubject('./../../../assets/Images/login/no_avatar.png');
  //private auth: AngularFireAuth
  constructor(private authFireAuth: AngularFireAuthModule, public dialog: MatDialog) {
    super();
  }

  handleGoogleSigIn() {
    from(signInWithPopup(getAuth(app), provider)).pipe(tap((res: UserCredential | any) => {
      this.avatarUser$.next(<string>res.user['photoURL']);
      const expirationTime = new Date(new Date().getTime() + +res._tokenResponse['expiresIn'] * 1000);
      const localUserToken = new UserTokenModel(res.user?.email, res.user.uid, res.user?.accessToken, expirationTime, res.user.providerData);

    }), catchError((e) => {
      this.openPopUpDialogError({
        message: "Ops!!! Maybe we have some problem",
        kind: 'warn',
        statusText: 'Hey,  try again pls!',
      })
      console.log("our error: ", e);
      return of([e]);
    }));

  }




  openPopUpDialogError(err: IModal) {
    this.dialog.open(PopUpMaterialComponent, {
      data: err
    });
  }

  openPopUpDialogSucess(sucess: IModal) {
    this.dialog.open(PopUpMaterialComponent, {
      data: sucess
    });
  }



}

