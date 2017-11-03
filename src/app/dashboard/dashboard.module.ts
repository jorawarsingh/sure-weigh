import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {JobService} from "../jobs/jobs.service";
import {DashboardService} from './dashboard.service';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent],
    providers: [DashboardService]
})
export class DashboardModule {
}
