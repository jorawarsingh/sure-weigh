import {NgModule} from '@angular/core';
import {CoordinatorComponent} from './coordinator.component';
import {RouterModule} from '@angular/router';
import {CoordinatorRoutingModule} from './coordinator.routing.module';

@NgModule({
    imports: [
        RouterModule,
        CoordinatorRoutingModule
    ],
    declarations: [CoordinatorComponent]
})
export class CoordinatorModule {}
