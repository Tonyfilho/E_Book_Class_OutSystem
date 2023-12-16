import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_start-pages/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  localAvatar$!: BehaviorSubject<any>;
  isAutentication$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthenticationService) {
   this.localAvatar$ = this.authService.avatarUser$;
   
  }

}
