import {NgModule} from '@angular/core';
import {DriverComponent} from './driver.component';
import {RouterModule} from '@angular/router';
import {DriverRoutingModule} from './driver.routing.module';

@NgModule({
    imports: [
        RouterModule,
        DriverRoutingModule
    ],
    declarations: [DriverComponent]
})
export class DriverModule {}
