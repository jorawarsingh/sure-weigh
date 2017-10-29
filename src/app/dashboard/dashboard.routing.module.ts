import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {JobsComponent} from '../jobs/jobs.component';
import {DriverComponent} from '../driver/driver.component';
import {ShipperComponent} from '../shipper/shipper.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'shipper',
                component: ShipperComponent
            },
            {
                path: 'driver',
                component: DriverComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }