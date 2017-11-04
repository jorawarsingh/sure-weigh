import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {DashboardService} from './dashboard.service';
import {CommonModule} from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
@NgModule({
    imports: [
        DashboardRoutingModule,
        CommonModule,
        DateInputsModule,
        IntlModule
    ],
    declarations: [DashboardComponent],
    providers: [DashboardService]
})
export class DashboardModule {
}
