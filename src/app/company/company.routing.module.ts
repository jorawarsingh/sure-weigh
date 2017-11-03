import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company.component';
import {CanActivateAdmin} from '../auth/gaurds/can-activate-admin.service';

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {
}
