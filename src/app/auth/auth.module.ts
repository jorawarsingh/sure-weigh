import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ChangePasswordComponent} from './login/change-password.component';
import {ResetPasswordComponent} from './login/forgot-password.component';
import {AdminRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {CanActivateAdmin} from './gaurds/can-activate-admin.service';
import {CanActivateShipper} from './gaurds/can-activate-shipper.service';

@NgModule({
    declarations: [
        LoginComponent,
        ChangePasswordComponent,
        ResetPasswordComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [
        CanActivateAdmin,
        CanActivateShipper
    ]
})
export class AuthModule {
}
