import {NgModule} from '@angular/core';
import {CompanyComponent} from './company.component';
import {RouterModule} from '@angular/router';
import {CompanyRoutingModule} from './company.routing.module';

@NgModule({
    imports: [
        RouterModule,
        CompanyRoutingModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule {}
