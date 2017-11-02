import {NgModule} from '@angular/core';
import {ShipperComponent} from './shipper.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShipperRoutingModule} from './shipper.routing.module';

@NgModule({
    imports: [
        RouterModule,
        ShipperRoutingModule,
        CommonModule
    ],
    declarations: [
        ShipperComponent
    ]
})
export class ShipperModule {}
