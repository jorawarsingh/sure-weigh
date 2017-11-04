import {NgModule} from '@angular/core';
import {CoordinatorComponent} from './coordinator.component';
import {RouterModule} from '@angular/router';
import {CoordinatorRoutingModule} from './coordinator.routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CoordinatorRoutingModule,
        CommonModule
    ],
    declarations: [CoordinatorComponent]
})
export class CoordinatorModule {}
