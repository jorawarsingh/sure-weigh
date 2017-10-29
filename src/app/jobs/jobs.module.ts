import {NgModule} from '@angular/core';
import {JobsComponent} from './jobs.component';
import {CommonModule} from '@angular/common';
import {ShipperService} from './jobs.service';

@NgModule({
    declarations: [JobsComponent],
    imports: [CommonModule],
    providers: [ShipperService]
})
export class JobsModule {}

