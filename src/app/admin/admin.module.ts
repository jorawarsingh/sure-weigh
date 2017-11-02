import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {DriverRoutingModule} from './admin.routing.module';

@NgModule({
    imports: [
        RouterModule,
        DriverRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {}
