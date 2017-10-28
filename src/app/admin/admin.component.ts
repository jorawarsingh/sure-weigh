import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent {
  constructor(private  router: Router) {
   // this.router.navigate(['/user/login']);
  }
}
