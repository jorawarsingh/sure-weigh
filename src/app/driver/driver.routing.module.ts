import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipperComponent} from '../shipper/shipper.component';
import {DriverComponent} from "./driver.component";

const routes: Routes = [
    {
        path: '',
        component: DriverComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriverRoutingModule { }
