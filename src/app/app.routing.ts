import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {PageNotFoundComponent} from './404';
import {ResetPasswordComponent} from './admin/login/forgot-password.component';
import {ChangePasswordComponent} from './admin/login/change-password.component';


@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot([
      {component: PageNotFoundComponent, path: '**'},
    ]),
  ],
})
export class AppRoutingModule {
}
