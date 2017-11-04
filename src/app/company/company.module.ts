import {NgModule} from '@angular/core';
import {CompanyComponent} from './company.component';
import {RouterModule} from '@angular/router';
import {CompanyRoutingModule} from './company.routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CompanyRoutingModule,
        CommonModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule {}
