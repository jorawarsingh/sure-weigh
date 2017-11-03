import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './company.component';
import {CanActivateAdmin} from '../auth/gaurds/can-activate-admin.service';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriverRoutingModule {
}
