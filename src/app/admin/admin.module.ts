import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ChangePasswordComponent} from './login/change-password.component';
import {ResetPasswordComponent} from './login/forgot-password.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    AdminComponent],
  imports: [
      CommonModule,
      AdminRoutingModule
  ]
})
export class AdminModule {
}
