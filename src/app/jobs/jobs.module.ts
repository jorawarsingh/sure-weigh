import {NgModule} from '@angular/core';
import {JobsComponent} from './jobs.component';
import {CommonModule} from '@angular/common';
import {JobService} from './jobs.service';
import {JobsRoutingModule} from './jobs.routing.module';
import {JobHandlerComponent} from './job-handler/job-handler.component';

@NgModule({
    declarations: [
        JobsComponent,
        JobHandlerComponent
    ],
    imports: [
        CommonModule,
        JobsRoutingModule
    ],
    providers: [JobService]
})
export class JobsModule {}

