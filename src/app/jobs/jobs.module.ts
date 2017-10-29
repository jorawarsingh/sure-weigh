import {NgModule} from '@angular/core';
import {JobsComponent} from './jobs.component';
import {CommonModule} from '@angular/common';
import {JobService} from './jobs.service';

@NgModule({
    declarations: [JobsComponent],
    imports: [CommonModule],
    providers: [JobService]
})
export class JobsModule {}

