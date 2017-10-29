import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {
  constructor(private  router: Router) {
    this.router.navigate(['/login']);
  }
}
