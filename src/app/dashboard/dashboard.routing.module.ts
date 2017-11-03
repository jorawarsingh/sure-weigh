import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {JobsComponent} from '../jobs/jobs.component';
import {DriverComponent} from '../driver/driver.component';
import {ShipperComponent} from '../shipper/shipper.component';
import {CanActivateAdmin} from "../auth/gaurds/can-activate-admin.service";
import {CanActivateShipper} from "../auth/gaurds/can-activate-shipper.service";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'jobs',
                loadChildren: 'app/jobs/jobs.module#JobsModule',
                canLoad: [
                    CanActivateShipper
                ]
            },
            {
                path: 'shipper',
                loadChildren: 'app/shipper/shipper.module#ShipperModule',
                canLoad: [
                    CanActivateShipper
                ]
            },
            {
                path: 'driver',
                loadChildren: 'app/driver/driver.module#DriverModule',
                canLoad: [
                    CanActivateShipper
                ]
            },
            {
                path: 'company',
                loadChildren: 'app/company/company.module#CompanyModule',
                canLoad: [
                CanActivateAdmin
            ]
            },
            {
                path: 'coordinator',
                loadChildren: 'app/coordinator/coordinator.module#CoordinatorModule',
                canLoad: [
                    CanActivateAdmin
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
