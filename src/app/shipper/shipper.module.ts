import {NgModule} from '@angular/core';
import {ShipperComponent} from './shipper.component';
import {CommonModule} from '@angular/common';
import {ShipperService} from './shipper.service';

@NgModule({
    declarations: [ShipperComponent],
    imports: [CommonModule],
    providers: [ShipperService]
})
export class ShipperModule {}

