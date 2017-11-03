import {Component} from '@angular/core';
import {DashboardService} from '../../dashboard/dashboard.service';

@Component({
    selector: 'sw-job-handler',
    templateUrl: 'job-handler.component.html',
    styleUrls: ['job-handler.component.scss' , '../jobs.component.scss']
})
export class JobHandlerComponent {
    constructor(private dashboardService: DashboardService) {}
    closeJobHandler() {
        this.dashboardService.jobPopupHandler.next(false);
    }
}
