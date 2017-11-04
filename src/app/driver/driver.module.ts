import {NgModule} from '@angular/core';
import {DriverComponent} from './driver.component';
import {RouterModule} from '@angular/router';
import {DriverRoutingModule} from './driver.routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DriverRoutingModule
    ],
    declarations: [DriverComponent]
})
export class DriverModule {}
