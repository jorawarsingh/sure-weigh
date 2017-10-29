import {NgModule} from '@angular/core';
import {ShipperComponent} from './shipper.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        ShipperComponent
    ]
})
export class ShipperModule {}
