import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
