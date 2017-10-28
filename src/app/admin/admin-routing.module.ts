import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './login/forgot-password.component';
import {ChangePasswordComponent} from './login/change-password.component';
import {AdminComponent} from './admin.component';

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild([
      {
        component: AdminComponent, path: 'user',
        children: [
          {component: LoginComponent, path: 'login', },
          {component: ResetPasswordComponent, path: 'reset-password', },
          {component: ChangePasswordComponent, path: 'change-password',  }
        ]
      }
    ]),
  ],
})
export class AdminRoutingModule {
}
