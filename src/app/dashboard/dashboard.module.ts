import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {ShipperModule} from '../shipper/shipper.module';

@NgModule({
    imports: [
        ShipperModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
