import {Component} from '@angular/core';
import {JobService} from '../jobs/jobs.service';
import {DashboardService} from './dashboard.service';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
    constructor(private dashboardService: DashboardService) {
        console.log('dashboard loaded');
    }

    addNewJob() {
        this.dashboardService.jobPopupHandler.next(true);
    }
}
