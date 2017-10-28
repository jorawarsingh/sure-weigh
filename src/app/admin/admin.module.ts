import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ChangePasswordComponent} from './login/change-password.component';
import {ResetPasswordComponent} from './login/forgot-password.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    AdminComponent],
  imports: [RouterModule, AdminRoutingModule]
})
export class AdminModule {
}
