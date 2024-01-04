import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from 'firebase/auth';
import { Inject, Injectable } from '@angular/core';
import { UnSubscription } from '../_share/unSubscription/unSubscription.service';
import { BehaviorSubject, catchError, from, of, tap } from 'rxjs';
import { UserTokenModel } from '../_share/models/userTokenModel';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { IModal } from '../_share/interfaces/i-modal';
import { MatDialog } from '@angular/material/dialog';
import { PopUpModalComponent } from '../_share/pop-up-modal/pop-up-modal.component';
import { Router } from '@angular/router';


/**precisa forçar a importação import { GoogleAuthProvider } from 'firebase/auth'; */
const provider = new GoogleAuthProvider();
//const app: FirebaseApp = Inject(initializeApp(environment.firebase)); tive q por no construtor pois da error

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends UnSubscription {

  private tokenExpirationTimer: any;
  userLogin$!: BehaviorSubject<UserTokenModel | null>;
  avatarUser$: BehaviorSubject<string> = new BehaviorSubject('./../../../assets/Images/login/no_avatar.png');
  //private auth: AngularFireAuth
  constructor(private app: FirebaseApp, public dialog: MatDialog, private router: Router) {
    super();
    // this.autoLogin();
  }

  handleGoogleSigIn() {
    from(signInWithPopup(getAuth(this.app), provider)).pipe(tap((res: UserCredential | any) => {
      this.avatarUser$.next(<string>res.user['photoURL']);
      const expirationTime = new Date(new Date().getTime() + +res._tokenResponse['expiresIn'] * 1000);
      const localUserToken = new UserTokenModel(res.user?.email, res.user.uid, res.user?.accessToken, expirationTime, res.user.providerData);
      localStorage.setItem('userDate', JSON.stringify(localUserToken));
      this.userLogin$.next(localUserToken);



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
    this.dialog.open(PopUpModalComponent, {
      data: err
    });
  }

  openPopUpDialogSucess(sucess: IModal) {
    this.dialog.open(PopUpModalComponent, {
      data: sucess
    });
  }

  autoLogin(): void {
    const localUserStorage: { email: string; userId: string; _token: string; _tokenExpirationDate: string; avatar: string } | any = JSON.parse(localStorage.getItem('userData') as string);
    if (!localUserStorage) {

      return;
    }
    const localUserSignIn: UserTokenModel = new UserTokenModel(localUserStorage?.email, localUserStorage?.userId, localUserStorage?._token, new Date(localUserStorage?._tokenExpirationDate), localUserStorage.avatar);
    if (localUserSignIn.token) {
      /**Atualizando a hora do time para o Observable */
      let expirationTime: number;
      this.avatarUser$.next(localUserSignIn.avatar as string);
      this.userLogin$.next(localUserSignIn);
      expirationTime = new Date(localUserSignIn?._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationTime);
    }
  }

  private autoLogout(expirationDate: number) {
    console.log("time:_ ", expirationDate);

    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDate);
  }


  logOut() {

    this.userLogin$.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/body']);
    this.avatarUser$.next('./../../../assets/Images/login/no_avatar.png');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }



}

