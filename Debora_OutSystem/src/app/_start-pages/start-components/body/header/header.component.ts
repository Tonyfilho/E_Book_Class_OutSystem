import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  localImg: Observable<string> = new Observable(d => d.next(`./../../../../assets/Images/login/no_avatar.png `));

}
