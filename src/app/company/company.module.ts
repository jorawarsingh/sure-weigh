import {NgModule} from '@angular/core';
import {AdminComponent} from './company.component';
import {RouterModule} from '@angular/router';
import {DriverRoutingModule} from './company.routing.module';

@NgModule({
    imports: [
        RouterModule,
        DriverRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {}
