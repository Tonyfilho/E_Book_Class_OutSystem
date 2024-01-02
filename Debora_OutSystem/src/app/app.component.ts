import { Component } from '@angular/core';
import { AuthenticationService } from './_start-pages/authentication/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  localAvatar$!: BehaviorSubject<any>;


  constructor(private authService: AuthenticationService) {
   this.localAvatar$ = this.authService.avatarUser$;

  }
}
