import {Component} from '@angular/core';
import {JobService} from './jobs.service';
import {IJobs} from './ijobs';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
    selector: 'sw-shipper',
    templateUrl: 'jobs.component.html',
    styleUrls: ['jobs.component.scss']
})
export class JobsComponent {
    jobs: IJobs[];
    jobDetailPopup: boolean;
    jobDetail: IJobs;
    showJobHandlerPopup = this.dashboardService.jobPopupHandler;

    constructor(private jobService: JobService, private dashboardService: DashboardService) {
        this.dashboardService.jobViewActive.next(true);
        this.jobService.getJobs().subscribe(
            jobs => {
                this.jobs = jobs;
            },
            err => console.log(err)
        );
    }
    openJobHandler() {
        this.dashboardService.jobPopupHandler.next(true);
    }

    openJobDetail(job) {
        this.jobDetailPopup = true;
        this.jobDetail = job;
    }

    closeJobDetail() {
        this.jobDetailPopup = false;
        this.jobDetail = null;
    }
}
