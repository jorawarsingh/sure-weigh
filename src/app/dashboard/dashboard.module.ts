import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {JobsModule} from '../jobs/jobs.module';
import {DriverModule} from '../driver/driver.module';
import {ShipperModule} from '../shipper/shipper.module';

@NgModule({
    imports: [
        JobsModule,
        DriverModule,
        ShipperModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
